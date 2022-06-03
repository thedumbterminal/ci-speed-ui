import * as React from 'react'
import { Stack, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../lib/api'

interface IFormInput {
  name: string
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Z0-9_\-\/]+$/),
})

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const [loading, setLoading] = React.useState(false)

  let _onSubmit = async (formData: IFormInput) => {
    setLoading(true)
    await api.post('/projects/', {
      name: formData.name,
    })
    setLoading(false)
  }
  return (
    <>
      <p>Create a new project</p>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            {...register('name')}
            label="New Project Name"
            helperText={errors.name?.message}
            error={!!errors.name?.message}
            variant="filled"
          />
          <div>
            <LoadingButton
              type="submit"
              loading={loading}
              variant="contained"
              loadingIndicator="Creating..."
            >
              Create Project
            </LoadingButton>
          </div>
        </Stack>
      </form>
    </>
  )
}
