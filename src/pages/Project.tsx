import {
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
  GridSortModel,
} from '@mui/x-data-grid'
import { Link as MLink } from '@mui/material'
import { Link } from 'react-router-dom'
import Build from '../shared/Build'
import { Api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { humanDateTimeFormat } from '../lib/date'
import { Grid, GridRow } from '../components/Grid'
import { useProjectId } from '../lib/project'

interface BuildRow extends GridRow {
  ref: string
  commitSha: string
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
      commitSha: item.commit_sha,
      commitUrl: item.commit_url,
      created: item.created_at,
    }
  })
}

const _renderLinkCell = (params: GridRenderCellParams) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View build</Link>
}

const _renderShaCell = (params: GridRenderCellParams) => {
  const formatted = params.formattedValue as string
  const url = params.row.commitUrl
  return (
    <MLink
      href={url}
      rel="noopener"
      target="_blank"
      title="View commit on GitHub"
    >
      {formatted}
    </MLink>
  )
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
    field: 'commitSha',
    headerName: 'Commit',
    width: 160,
    renderCell: _renderShaCell,
  },
  {
    field: 'id',
    headerName: 'View',
    width: 160,
    valueFormatter: _formatLink,
    renderCell: _renderLinkCell,
  },
]

const _getPageData = (id: number) => {
  const { data: project, error: projectError } = useSWR(
    '/projects/' + id,
    Api.simpleGet,
  )
  const { data: builds, error: runError } = useSWR(
    () => ({ url: '/builds/', params: { project_id: project.id + '' } }),
    Api.get,
  )
  return {
    data: { project, builds },
    error: projectError || runError,
    isLoading: !runError && !builds,
  }
}

const Project = () => {
  let builds: BuildRow[] = []
  const projectId = useProjectId()

  if (!projectId) throw new Error('No project ID given')
  const { data, error, isLoading } = _getPageData(projectId)
  if (error) throw error
  if (data?.builds) {
    builds = _transformRows(data.builds)
  }

  const sortModel: GridSortModel = [{ field: 'created', sort: 'desc' }]

  return (
    <>
      <Typography variant="h2" component="h3">
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
