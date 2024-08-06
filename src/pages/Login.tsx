import Login from '../components/Login'
import Typography from '@mui/material/Typography'
import Layout from '../components/Layout'

const Account = () => {
  return (
    <>
      <Layout>
        <Typography variant="h2" component="h3">
          Login
        </Typography>
        <Login />
      </Layout>
    </>
  )
}

export default Account
