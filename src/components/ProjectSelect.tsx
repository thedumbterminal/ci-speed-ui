import Project from '../shared/Project'
import useSWR from 'swr'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { api } from '../lib/api'

const _getProjects = () => {
  const { data, error } = useSWR('/projects/', api.get)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const _renderMenuItem = (project: Project) => {
  return (
    <MenuItem key={project.id} value={project.id}>
      {project.name}
    </MenuItem>
  )
}

interface ProjectSelectProps {
  projectId: string
  onChange: (event: SelectChangeEvent) => void
}

export default (props: ProjectSelectProps) => {
  let projects: Project[] = []
  const { data, error, isLoading } = _getProjects()
  if (error) throw error
  if (data) {
    projects = data
  }

  const SelectComponent = (
    <Select
      labelId="project-select-label"
      id="project-select"
      value={props.projectId}
      label="Project"
      onChange={props.onChange}
    >
      {projects.map(_renderMenuItem)}
    </Select>
  )

  return (
    <FormControl fullWidth>
      <InputLabel id="project-select-label">Project</InputLabel>
      {!isLoading && SelectComponent}
    </FormControl>
  )
}
