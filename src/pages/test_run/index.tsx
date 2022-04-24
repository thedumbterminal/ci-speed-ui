import api from '../../api'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import Link from 'next/link'
import getQueryValue from '../../lib/query'
import useSWR from 'swr'
import { useRouter } from 'next/router'

interface TestSuiteRow {
  id: number,
  name: string,
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
      duration: item.time
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return (
    <Link href={formatted}>Test cases</Link> 
  )
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 160
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 160
  },
  {
    field: 'id',
    headerName: 'View',
    width: 160,
    valueFormatter: formatLink,
    renderCell: renderLinkCell
  }
]

const _getPageData = (id: string) => {
  const { data: testRun, error: runError } = useSWR('/test_runs/' + id, api.get)
  const { data: testSuites, error: suiteError } = useSWR(() => ['/test_suites/', {test_run: testRun.id}], api.get)
  return {
    data: {testRun, testSuites},
    error: runError || suiteError,
    isLoading: !suiteError && !testSuites,
  }
}

const TestRun: NextPage = () => {
  const router = useRouter()
  const testRunId = getQueryValue(router.query, 'id')
  if(!testRunId) throw new Error('No test run ID given')
  const {data, error, isLoading} = _getPageData(testRunId|| '')
  if (error) throw error
  let testSuites: TestSuiteRow[] = []
  if(data && data.testSuites){
    testSuites = transformRows(data.testSuites)
  }

  return (
    <>
      <h1>Test Run { data.testRun && data.testRun.id }</h1>
      <p>
        Test suites
      </p>
      <DataGrid
        rows={testSuites}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10,50,100]}
        autoHeight={true}
        disableColumnMenu={true}
        disableSelectionOnClick={true}
        loading={isLoading}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell--editable': {
          }
        }}
      />
    </>
  )
}

export default TestRun
