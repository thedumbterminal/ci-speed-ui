import * as React from 'react'
import { Stack, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

export default () => {
  // TODO add some project name validation
  const [newProjectError, setNewProjectError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  let onClick = () => {
    setLoading(true)
    setNewProjectError('Not implemented yet')
    setLoading(false)
  }
  return (
    <>
      <p>
        Create a new project
      </p>
      <Stack direction="row" spacing={2} alignItems="center">
          <TextField
              error={Boolean(newProjectError)}
              id="project_name"
              label="New Project Name"
              helperText={newProjectError}
              variant="filled" />
          <div>
            <LoadingButton
              loading={loading}
              variant="contained"
              onClick={onClick}
              loadingIndicator="Creating..."
            >Create Project</LoadingButton>
        </div>
      </Stack>
    </>
  )
}
