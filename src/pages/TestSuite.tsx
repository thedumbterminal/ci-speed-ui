import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { Link, useSearchParams } from 'react-router-dom'
import { Grid } from '../components/Grid'
import TestCaseRow from '../types/TestCaseRow'
import TestCase from '../models/TestCase'

const _formatFailureLink = (value: string): string => {
  return `/test_failure/?id=${value}`
}

const _formatSkippedLink = (value: string): string => {
  return `/skipped_test/?id=${value}`
}

const _renderLinkCell = (params: GridRenderCellParams) => {
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
    Api.simpleGet,
  )
  const { data: testCases, error: caseError } = useSWR(
    () => ({ url: '/test_cases/', params: { test_suite_id: id } }),
    Api.get,
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
    testCases = TestCase.transformRows(data.testCases)
  }

  return (
    <>
      <Typography variant="h2" component="h3">
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
