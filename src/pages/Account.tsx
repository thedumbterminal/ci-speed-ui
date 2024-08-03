import Typography from '@mui/material/Typography'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

const Account = () => {
  const user = useAuth()
  if (!user) {
    console.log('Redirecting to login...')
    return <Navigate to="/login" />
  }

  return (
    <>
      <Typography variant="h2" component="h3">
        Account
      </Typography>
      <p>
        Logged in via GitHub as <b>{user.email}</b>.
      </p>
    </>
  )
}

export default Account
