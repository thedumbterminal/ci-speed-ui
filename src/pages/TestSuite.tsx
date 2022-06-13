import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { Link, useSearchParams } from 'react-router-dom'

interface TestCaseRow {
  id: number
  name: string
  duration: number
  status: string
  failure_id: number | undefined
}

interface TestCase {
  name: string
  time: number
  id: number
  test_failures: Array<number>
}

const _formatLink = (value: string): string => {
  return `/test_failure/?id=${value}`
}

const _renderLinkCell = (params: GridRenderCellParams<string>) => {
  if (!params.formattedValue) return
  const formattedLink = _formatLink(params.formattedValue)
  return <Link to={formattedLink}>View error</Link>
}

const _transformRow = (item: TestCase) => {
  const status = item.test_failures.length ? 'Failure' : 'Success'
  const failure_id = item.test_failures[0]
  return {
    id: item.id,
    name: item.name,
    duration: item.time,
    status,
    failure_id,
  }
}

const _transformRows = (testCases: TestCase[]): TestCaseRow[] => {
  return testCases.map(_transformRow)
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
  },
  {
    field: 'failure_id',
    headerName: 'View',
    width: 160,
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
      <DataGrid
        rows={testCases}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        autoHeight={true}
        disableColumnMenu={true}
        disableSelectionOnClick={true}
        loading={isLoading}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell--editable': {},
        }}
      />
    </>
  )
}

export default TestSuite
