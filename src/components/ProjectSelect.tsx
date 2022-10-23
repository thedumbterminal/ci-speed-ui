import Project from '../shared/Project'
import useSWR from 'swr'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { api } from '../lib/api'
import useLocalStorageState from 'use-local-storage-state'

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

export default () => {
  let projects: Project[] = []
  const { data, error, isLoading } = _getProjects()
  if (error) throw error
  if (data) {
    projects = data
  }

  const [projectId, setProjectId] = useLocalStorageState<string>('projectId', {
    defaultValue: '',
  })

  const _handleChange = (event: SelectChangeEvent): void => {
    const value = event.target.value
    setProjectId(value)
  }

  const SelectComponent = (
    <Select
      labelId="project-select-label"
      id="project-select"
      value={projectId}
      label="Project"
      onChange={_handleChange}
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
