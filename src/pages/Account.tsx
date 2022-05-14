import { Link, useSearchParams } from 'react-router-dom'
import api from '../lib/api'
import useSWR from 'swr'
import Login from '../components/Login'

const _getUserInfo = () => {
  const { data, error } = useSWR('/user/', api.get)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Account = () => {
  const {data, error, isLoading} = _getUserInfo()
  console.log('error:', error)
  console.log('data:', data)
  let stateComponent
  if(!data){
    stateComponent = <Login />
  } else {
    stateComponent = <div />
  }
  return (
    <>
      <h1>Account</h1>
      {stateComponent}
    </>
  )
}

export default Account
