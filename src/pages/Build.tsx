import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import { format } from 'date-fns'
import { Link, useSearchParams } from 'react-router-dom'
import TestRun from '../shared/TestRun'
import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'

interface TestRunRow {
  id: number,
  created: string
}

const formatDate = (params: GridValueFormatterParams<string>): string => {
  const date = new Date(params.value)
  return format(date, 'MM/dd/yyyy kk:mm:ss')
}

const formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/test_run/?id=${params.value}`
}

const transformRows = (testRuns: TestRun[]): TestRunRow[] => {
  return testRuns.map((item: TestRun) => {
    return {
      id: item.id,
      created: item.created_at
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return (
    <Link to={formatted}>View test run</Link>
  )
}

const columns: GridColDef[] = [
  {
    field: 'created',
    headerName: 'Created',
    width: 160,
    valueFormatter: formatDate
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
  const { data: build, error: projectError } = useSWR('/builds/' + id, api.get)
  const { data: testRuns, error: runError } = useSWR(() => ['/test_runs/', {build_id: build.id}], api.get)
  return {
    data: {build, testRuns},
    error: projectError || runError,
    isLoading: !runError && !testRuns,
  }
}

const Build = () => {
  let [searchParams] = useSearchParams()
  let buildId = searchParams.get('id')

  const {data, error, isLoading} = _getPageData(buildId || '')
  if(error) throw error
  let testRuns: TestRunRow[] = []
  if(data && data.testRuns){
    testRuns = transformRows(data.testRuns)
  }

  return (
    <>
      <Typography variant="h1" component="h1">Build</Typography>
      <p>
        Test runs for <b>{ data.build && data.build.ref }</b>.
      </p>
      <DataGrid
        rows={testRuns}
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

export default Build
