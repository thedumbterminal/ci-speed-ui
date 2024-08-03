import { Typography } from '@mui/material'
import NewProject from '../components/NewProject'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

const AddProject = () => {
  const user = useAuth()
  if (!user) {
    console.log('Redirecting to login...')
    return <Navigate to="/login" />
  }

  return (
    <>
      <Typography variant="h2" component="h3">
        Add Project
      </Typography>
      <NewProject />
    </>
  )
}

export default AddProject
