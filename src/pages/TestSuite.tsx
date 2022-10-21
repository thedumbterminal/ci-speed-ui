import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { Link, useSearchParams } from 'react-router-dom'
import { Grid, GridRow } from '../components/Grid'

interface TestCaseRow extends GridRow {
  id: number
  name: string
  duration: number
  status: string
  failure_id: number | undefined
  skipped_id: number | undefined
}

interface TestCase {
  name: string
  time: number
  id: number
  test_failures: Array<number>
  skipped_tests: Array<number>
}

const _formatFailureLink = (value: string): string => {
  return `/test_failure/?id=${value}`
}

const _formatSkippedLink = (value: string): string => {
  return `/skipped_test/?id=${value}`
}

const _renderLinkCell = (params: GridRenderCellParams<string>) => {
  const failureId = params.row.failure_id
  const skippedId = params.row.skipped_id
  if (failureId) {
    const formattedLink = _formatFailureLink(failureId)
    return <Link to={formattedLink}>View</Link>
  } else if (skippedId) {
    const formattedLink = _formatSkippedLink(skippedId)
    return <Link to={formattedLink}>View</Link>
  }
}

const _statusForTestCase = (test: TestCase): string => {
  if (test.test_failures.length) return 'Failure'
  if (test.skipped_tests.length) return 'Skipped'
  return 'Success'
}

const _transformRow = (item: TestCase) => {
  const failure_id = item.test_failures[0]
  const skipped_id = item.skipped_tests[0]
  return {
    id: item.id,
    name: item.name,
    duration: item.time,
    status: _statusForTestCase(item),
    failure_id,
    skipped_id,
  }
}

const _transformRows = (testCases: TestCase[]): TestCaseRow[] => {
  return testCases.map(_transformRow)
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 120,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'view',
    headerName: 'View',
    width: 120,
    renderCell: _renderLinkCell,
  },
]

const _getPageData = (id: string) => {
  const { data: testSuite, error: suiteError } = useSWR(
    '/test_suites/' + id,
    api.get
  )
  const { data: testCases, error: caseError } = useSWR(
    () => ['/test_cases/', { test_suite_id: id }],
    api.get
  )
  return {
    data: { testSuite, testCases },
    error: suiteError || caseError,
    isLoading: !caseError && !testCases,
  }
}

const TestSuite = () => {
  let [searchParams] = useSearchParams()
  let testSuiteId = searchParams.get('id')
  let testCases: TestCaseRow[] = []
  if (!testSuiteId) throw new Error('No test suite ID given')
  const { data, error, isLoading } = _getPageData(testSuiteId)
  if (error) throw error
  if (data?.testCases) {
    testCases = _transformRows(data.testCases)
  }

  return (
    <>
      <Typography variant="h2" component="h2">
        Test Suite
      </Typography>
      <p>
        Test cases for test suite <b>{data.testSuite && data.testSuite.name}</b>
        .
      </p>
      <Grid rows={testCases} columns={columns} isLoading={isLoading} />
    </>
  )
}

export default TestSuite
