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

interface NumTest {
  x: string,
  y: number
}

const _isoStringFormat = (iso: string): string => {
  const date = new Date(iso)
  return format(date, 'MM/dd/yyyy kk:mm:ss')
}

const _formatDate = (params: GridValueFormatterParams<string>): string => _isoStringFormat(params.value)

const _formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/build/?id=${params.value}`
}

const _transformRows = (testRuns: Build[]): BuildRow[] => {
  return testRuns.map((item: Build) => {
    return {
      id: item.id,
      ref: item.ref,
      created: item.created_at
    }
  })
}

const _transformNumTests = (numTests: NumTest[]): NumTest[] => {
  return numTests.map((item: NumTest) => {
    return {
      x: _isoStringFormat(item.x),
      y: item.y
    }
  })
}


const _renderLinkCell = (params: GridRenderCellParams<string>) => {
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
    valueFormatter: _formatDate
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
    valueFormatter: _formatLink,
    renderCell: _renderLinkCell
  }
]

const _getPageData = (id: string) => {
  const { data: project, error: projectError } = useSWR('/projects/' + id, api.get)
  const { data: builds, error: runError } = useSWR(() => ['/builds/', {project_id: project.id}], api.get)
  const { data: numTests, error: numTestsError } = useSWR(() => `/projects/${id}/num_tests`, api.get)
  return {
    data: {project, builds, numTests},
    error: projectError || runError || numTestsError,
    isLoading: !runError && !builds && !numTestsError && !numTests,
  }
}

const Project = () => {
  let [searchParams] = useSearchParams()
  let projectId = searchParams.get('id')

  const {data, error, isLoading} = _getPageData(projectId|| '')
  if(error) throw error
  let builds: BuildRow[] = []
  if(data?.builds){
    builds = _transformRows(data.builds)
  }
  let numTests: NumTest[] = []
  if(data?.numTests){
    numTests = _transformNumTests(data.numTests)
  }

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
        data={numTests}
      />
    </>
  )
}

export default Project
