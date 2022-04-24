import api from '../../api'
import TestRun from '../../shared/TestRun'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import Link from 'next/link'
import getQueryValue from '../../lib/query'

interface TestSuiteRow {
  id: number,
  name: string,
  duration: number
}

interface TestRunProps {
  testRun?: TestRun
  testSuites: TestSuiteRow[]
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

const TestRun: NextPage<TestRunProps> = ({ testRun, testSuites }: TestRunProps) => {
  return (
    <>
      <h1>Test Run { testRun && testRun.id }</h1>
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

TestRun.getInitialProps = async ({ query }): Promise<TestRunProps> => {
  const testRunId = getQueryValue(query, 'id')
  if (!testRunId) return { testSuites: [] }

  const testRun = await api.get(`/test_runs/${testRunId}`)
  const testSuites = await api.get(`/test_suites/`, { test_run: testRunId })
  const rows = transformRows(testSuites)
  return { testRun, testSuites: rows }
}

export default TestRun
