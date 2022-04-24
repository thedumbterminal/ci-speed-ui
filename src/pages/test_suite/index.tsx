import { DataGrid, GridColDef } from '@mui/x-data-grid'
import api from '../../api'
import { NextPage } from 'next'
import getQueryValue from '../../lib/query'
import useSWR from 'swr'
import { useRouter } from 'next/router'

interface TestCaseRow {
  id: number,
  name: string,
  duration: number
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

const _getPageData = (id: string) => {
  const { data: testSuite, error: suiteError } = useSWR('/test_suites/' + id, api.get)
  const { data: testCases, error: caseError } = useSWR(() => ['/test_cases/', {test_suite: testSuite.id}], api.get)
  return {
    data: {testSuite, testCases},
    error: suiteError || caseError,
    isLoading: !caseError && !testCases,
  }
}

const TestSuite: NextPage = () => {
  const router = useRouter()
  const testSuiteId = getQueryValue(router.query, 'id')
  if(!testSuiteId) throw new Error('No test suite ID given')
  const {data, error, isLoading} = _getPageData(testSuiteId)
  if (error) throw error
  let testCases: TestCaseRow[] = []
  if(data && data.testCases){
    testCases = transformRows(data.testCases)
  }

  return (
    <>
      <h1>Test suite { data.testSuite && data.testSuite.name }</h1>
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

export default TestSuite
