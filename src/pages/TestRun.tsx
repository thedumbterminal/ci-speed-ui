import { api } from '../lib/api'
import TestSuite from '../shared/TestSuite'
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { Link, useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'

interface TestSuiteRow {
  id: number
  name: string
  duration: number
}

const formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/test_suite/?id=${params.value}`
}

const transformRows = (testSuites: TestSuite[]): TestSuiteRow[] => {
  return testSuites.map((item: TestSuite) => {
    return {
      id: item.id,
      name: item.name,
      duration: item.time,
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View test suite</Link>
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
    width: 160,
  },
  {
    field: 'id',
    headerName: 'View',
    width: 160,
    valueFormatter: formatLink,
    renderCell: renderLinkCell,
  },
]

const _getPageData = (id: string) => {
  const { data: testRun, error: runError } = useSWR('/test_runs/' + id, api.get)
  const { data: testSuites, error: suiteError } = useSWR(
    () => ['/test_suites/', { test_run_id: testRun.id }],
    api.get
  )
  return {
    data: { testRun, testSuites },
    error: runError || suiteError,
    isLoading: !suiteError && !testSuites,
  }
}

const TestRun = () => {
  let [searchParams] = useSearchParams()
  let testRunId = searchParams.get('id')
  let testSuites: TestSuiteRow[] = []
  if (!testRunId) throw new Error('No test run ID given')
  const { data, error, isLoading } = _getPageData(testRunId)
  if (error) throw error
  if (data?.testSuites) {
    testSuites = transformRows(data.testSuites)
  }

  return (
    <>
      <Typography variant="h2" component="h2">
        Test Run
      </Typography>
      <p>
        Test suites for test run <b>{data.testRun && data.testRun.id}</b>.
      </p>
      <DataGrid
        rows={testSuites}
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

export default TestRun
