import { Api } from '../lib/api'
import useSWR from 'swr'
import Login from '../components/Login'
import Typography from '@mui/material/Typography'

interface UserInfoProps {
  data: UserInfo
}

interface UserInfo {
  email: string
}

const _getUserInfo = () => {
  const { data, error } = useSWR('/user/', Api.simpleGet)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Info = ({ data }: UserInfoProps) => {
  return (
    <>
      <p>
        Logged in via GitHub as <b>{data.email}</b>.
      </p>
    </>
  )
}

const Account = () => {
  const { data } = _getUserInfo()
  let stateComponent
  if (!data) {
    stateComponent = <Login />
  } else {
    stateComponent = <Info data={data} />
  }
  return (
    <>
      <Typography variant="h2" component="h3">
        Account
      </Typography>
      {stateComponent}
    </>
  )
}

export default Account
