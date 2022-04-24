import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import api from '../../api'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import getQueryValue from '../../lib/query'

interface TestCaseRow {
  id: number,
  name: string,
  duration: number
}

interface TestSuiteProps {
  testSuite?: TestSuite
  testCases: TestCaseRow[]
}

interface TestCase {
  name: string,
  time: number,
  id: number
}

const transformRows = (testRuns: TestCase[]): TestCaseRow[] => {
  return testRuns.map((item: TestCase) => {
    return {
      id: item.id,
      name: item.name,
      duration: item.time
    }
  })
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
    width: 180
  }
]

const TestSuite: NextPage<TestSuiteProps> = ({ testSuite, testCases }: TestSuiteProps) => {
  return (
    <>
      <h1>Test suite { testSuite && testSuite.name }</h1>
      <p>
        Test cases
      </p>
      <DataGrid
        rows={testCases}
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

TestSuite.getInitialProps = async ({ query }): Promise<TestSuiteProps> => {
  const testSuiteId = getQueryValue(query, 'id')
  if (!testSuiteId) return { testCases: [] }

  const testSuite = await api.get(`/test_suites/${testSuiteId}`)
  const testCases = await api.get(`/test_cases/`, { test_suite: testSuiteId })
  const rows = transformRows(testCases)
  return { testSuite, testCases: rows }
}

export default TestSuite
