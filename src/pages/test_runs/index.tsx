import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import { format } from 'date-fns'
import Link from 'next/link'
import TestRun from '../../shared/TestRun'
import api from '../../api'
import { NextPage } from 'next'

interface TestRunRow {
  id: number,
  created: string
}

interface TestRunsProps {
  testRuns: TestRunRow[]
}

const formatDate = (params: GridValueFormatterParams<string>): string => {
  const date = new Date(params.value)
  return format(date, 'MM/dd/yyyy kk:mm:ss')
}

const formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/test_runs/${params.value}`
}

const transformRows = (testRuns: TestRun[]): TestRunRow[] => {
  return testRuns.map((testRun: TestRun) => {
    return {
      id: testRun.id,
      created: testRun.created_at
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return (
    <Link href={formatted}>Test suites</Link> 
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

const TestRuns: NextPage<TestRunsProps> = ({ testRuns }: TestRunsProps) => {
  return (
    <>
      <h1>Test Runs</h1>
      <DataGrid
        rows={testRuns}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
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

TestRuns.getInitialProps = async (): Promise<TestRunsProps> => {
  const data = await api.get('/test_runs/')
  const rows = transformRows(data)
  return { testRuns: rows }
}

export default TestRuns
