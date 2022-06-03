import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import Project from '../shared/Project'
import { api } from '../lib/api'
import useSWR from 'swr'
import { Typography } from '@mui/material'
import NewProject from '../components/NewProject'

interface ProjectRow {
  id: number
  name: string
}

const formatLink = (params: GridValueFormatterParams<string>): string => {
  return `/project/?id=${params.value}`
}

const transformRows = (projects: Project[]): ProjectRow[] => {
  return projects.map((item: Project) => {
    return {
      id: item.id,
      name: item.name,
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams<string>) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View project</Link>
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
  },
  {
    field: 'id',
    headerName: 'View',
    width: 100,
    valueFormatter: formatLink,
    renderCell: renderLinkCell,
  },
]

const _getPageData = () => {
  const { data, error } = useSWR('/projects/', api.get)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Projects = () => {
  const { data, error, isLoading } = _getPageData()
  if (error) throw error
  let projects: ProjectRow[] = []
  if (data) {
    projects = transformRows(data)
  }

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Projects
      </Typography>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        autoHeight={true}
        disableColumnMenu={true}
        disableSelectionOnClick={true}
        loading={isLoading}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell--editable': {},
        }}
      />
      <NewProject />
    </>
  )
}

export default Projects
