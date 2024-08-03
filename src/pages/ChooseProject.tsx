import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

const ChooseProject = () => {
  const user = useAuth()
  if (!user) {
    console.log('Redirecting to login...')
    return <Navigate to="/login" />
  }

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Choose Project
      </Typography>
      <ProjectSelect />
    </>
  )
}

export default ChooseProject
