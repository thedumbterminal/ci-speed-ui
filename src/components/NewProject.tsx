import * as React from 'react'
import { Stack, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
  project_name: string
}

const schema = yup.object().shape({
  project_name: yup.string().required().matches(/^[a-zA-Z0-9_-]+$/),
})

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const [loading, setLoading] = React.useState(false)

  let _onSubmit = (data: IFormInput) => {
    setLoading(true)
    console.log('got form data' ,data)

    setLoading(false)
  }
  return (
    <>
      <p>
        Create a new project
      </p>
      <form onSubmit={handleSubmit(_onSubmit)} >
        <Stack direction="row" spacing={2} alignItems="center">
            <TextField
                {...register("project_name")}
                label="New Project Name"
                helperText={errors.project_name?.message}
                error={!!errors.project_name?.message}
                variant="filled" />
            <div>
              <LoadingButton
                type="submit"
                loading={loading}
                variant="contained"
                loadingIndicator="Creating..."
              >Create Project</LoadingButton>
          </div>
        </Stack>
      </form>
    </>
  )
}
