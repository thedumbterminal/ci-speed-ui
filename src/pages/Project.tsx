import { DataGrid, GridColDef, GridValueFormatterParams, GridRenderCellParams } from '@mui/x-data-grid'
import { format } from 'date-fns'
import { Link, useSearchParams } from 'react-router-dom'
import Build from '../shared/Build'
import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import BarChart from '../components/BarChart'

interface BuildRow {
  id: number,
  ref: string,
  created: string
}

const formatDate = (params: GridValueFormatterParams<string>): string => {
  const date = new Date(params.value)
  return format(date, 'MM/dd/yyyy kk:mm:ss')
}

const formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/build/?id=${params.value}`
}

const transformRows = (testRuns: Build[]): BuildRow[] => {
  return testRuns.map((item: Build) => {
    return {
      id: item.id,
      ref: item.ref,
      created: item.created_at
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return (
    <Link to={formatted}>View build</Link>
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
    field: 'ref',
    headerName: 'Reference',
    width: 160,
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
  const { data: project, error: projectError } = useSWR('/projects/' + id, api.get)
  const { data: builds, error: runError } = useSWR(() => ['/builds/', {project_id: project.id}], api.get)
  return {
    data: {project, builds},
    error: projectError || runError,
    isLoading: !runError && !builds,
  }
}

const Project = () => {
  let [searchParams] = useSearchParams()
  let projectId = searchParams.get('id')

  const {data, error, isLoading} = _getPageData(projectId|| '')
  if(error) throw error
  let builds: BuildRow[] = []
  if(data && data.builds){
    builds = transformRows(data.builds)
  }

  const chartData = [
    { x: '2020-01-01', y: 50 },
    { x: '2020-01-02', y: 10 },
    { x: '2020-01-03', y: 20 },
  ]

  return (
    <>
      <Typography variant="h2" component="h2">Project</Typography>
      <p>
        Builds for project <b>{ data.project && data.project.name }</b>.
      </p>
      <DataGrid
        rows={builds}
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
      <p>
        Number of tests over time
      </p>
      <BarChart
        height={200}
        data={chartData}
      />
    </>
  )
}

export default Project
