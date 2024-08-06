import Typography from '@mui/material/Typography'
import { useAuth } from '../hooks/AuthProvider'

const Account = () => {
  const user = useAuth()

  return (
    <>
      <Typography variant="h2" component="h3">
        Account
      </Typography>
      <p>
        Logged in via GitHub as <b>{user && user.email}</b>.
      </p>
    </>
  )
}

export default Account
