import * as React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Api } from '../lib/api'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useSWR from 'swr'
import InputLabel from '@mui/material/InputLabel'

interface IFormInput {
  name: string
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Z0-9_\-\/]+$/),
})

const _getAvailableProjects = () => {
  const { data, error } = useSWR('/available_projects/', Api.simpleGet)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const _renderMenuItem = (projectName: string) => {
  return (
    <MenuItem key={projectName} value={projectName}>
      {projectName}
    </MenuItem>
  )
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  let availableProjects: string[] = []
  const { data, error, isLoading } = _getAvailableProjects()
  if (error) throw error
  if (data) {
    availableProjects = data
  }

  const [loading, setLoading] = React.useState(false)

  const _onSubmit = async (formData: IFormInput) => {
    setLoading(true)
    await Api.post({
      url: '/projects/',
      params: {
        name: formData.name,
      },
    })
    setLoading(false)
  }

  const SelectComponent = (
    <Select
      {...register('name')}
      labelId="available-project-select-label"
      id="available-project-select"
      defaultValue=""
      label="Available Project Name"
      error={!!errors.name?.message}
    >
      {availableProjects.map(_renderMenuItem)}
    </Select>
  )

  return (
    <>
      <p>Enable a new project, so results can be uploaded to CI-Speed.</p>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <FormControl fullWidth error={!!errors.name?.message}>
          <InputLabel id="available-project-select-label">
            Available Projects
          </InputLabel>
          {!isLoading && SelectComponent}
          <FormHelperText>{errors.name?.message}</FormHelperText>
        </FormControl>
        <div>
          <br />
          <LoadingButton
            type="submit"
            loading={loading}
            variant="contained"
            loadingIndicator="Activating..."
          >
            Activate Project
          </LoadingButton>
        </div>
      </form>
    </>
  )
}
