import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { api } from '../lib/api'
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'

interface TestCaseRow {
  id: number
  name: string
  duration: number
}

interface TestCase {
  name: string
  time: number
  id: number
}

const transformRows = (testRuns: TestCase[]): TestCaseRow[] => {
  return testRuns.map((item: TestCase) => {
    return {
      id: item.id,
      name: item.name,
      duration: item.time,
    }
  })
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
]

const _getPageData = (id: string) => {
  const { data: testSuite, error: suiteError } = useSWR(
    '/test_suites/' + id,
    api.get
  )
  const { data: testCases, error: caseError } = useSWR(
    () => ['/test_cases/', { test_suite_id: testSuite.id }],
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
  //if(!testSuiteId) throw new Error('No test suite ID given')
  const { data, error, isLoading } = _getPageData(testSuiteId || '')
  if (error) throw error
  let testCases: TestCaseRow[] = []
  if (data && data.testCases) {
    testCases = transformRows(data.testCases)
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
