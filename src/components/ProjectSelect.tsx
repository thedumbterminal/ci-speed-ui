import Project from '../shared/Project'
import useSWR from 'swr'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Api } from '../lib/api'
import useLocalStorageState from 'use-local-storage-state'

const _getProjects = () => {
  const { data, error } = useSWR('/projects/', Api.simpleGet)
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
  let defaultValue: number = 0
  if (data && data.length) {
    projects = data
    defaultValue = projects[0].id
  }

  const [projectId, setProjectId] = useLocalStorageState<number>('projectId', {
    defaultValue,
  })

  const _handleChange = (event: SelectChangeEvent): void => {
    const value = parseInt(event.target.value, 10)
    setProjectId(value)
  }

  const SelectComponent = (
    <Select
      labelId="project-select-label"
      id="project-select"
      value={projectId.toString()}
      label="Project"
      onChange={_handleChange}
    >
      {projects.map(_renderMenuItem)}
    </Select>
  )

  return (
    <FormControl fullWidth>
      <InputLabel id="project-select-label">Projects</InputLabel>
      {!isLoading && SelectComponent}
    </FormControl>
  )
}
