import {
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
  GridSortModel,
} from '@mui/x-data-grid'
import { Link, useSearchParams } from 'react-router-dom'
import Build from '../shared/Build'
import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { humanDateTimeFormat } from '../lib/date'
import { Grid, GridRow } from '../components/Grid'

interface BuildRow extends GridRow {
  ref: string
  created: string
}

const _formatDate = (params: GridValueFormatterParams<string>): string =>
  humanDateTimeFormat(params.value)

const _formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/build/?id=${params.value}`
}

const _transformRows = (testRuns: Build[]): BuildRow[] => {
  return testRuns.map((item: Build) => {
    return {
      id: item.id,
      ref: item.ref,
      created: item.created_at,
    }
  })
}

const _renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View build</Link>
}

const columns: GridColDef[] = [
  {
    field: 'created',
    headerName: 'Created',
    width: 160,
    valueFormatter: _formatDate,
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
    renderCell: _renderLinkCell,
  },
]

const _getPageData = (id: string) => {
  const { data: project, error: projectError } = useSWR(
    '/projects/' + id,
    api.get
  )
  const { data: builds, error: runError } = useSWR(
    () => ['/builds/', { project_id: project.id }],
    api.get
  )
  return {
    data: { project, builds },
    error: projectError || runError,
    isLoading: !runError && !builds,
  }
}

const Project = () => {
  let builds: BuildRow[] = []
  let [searchParams] = useSearchParams()
  let projectId = searchParams.get('id')
  if (!projectId) throw new Error('No project ID given')
  const { data, error, isLoading } = _getPageData(projectId)
  if (error) throw error
  if (data?.builds) {
    builds = _transformRows(data.builds)
  }

  const sortModel: GridSortModel = [{ field: 'created', sort: 'desc' }]

  return (
    <>
      <Typography variant="h2" component="h2">
        Project
      </Typography>
      <p>
        Builds for project <b>{data.project && data.project.name}</b>.
      </p>
      <Grid
        rows={builds}
        columns={columns}
        isLoading={isLoading}
        sortModel={sortModel}
      />
    </>
  )
}

export default Project
