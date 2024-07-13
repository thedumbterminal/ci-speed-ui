import { Api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const _getUserInfo = () => {
  const { data, error } = useSWR('/user/', Api.simpleGet)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Account = () => {
  const navigate = useNavigate()
  const { data } = _getUserInfo()

  useEffect(() => {
    if (!data) {
      console.log('Redirecting to login...')
      navigate('/login')
    }
  }, [data, navigate])

  return (
    <>
      <Typography variant="h2" component="h3">
        Account
      </Typography>
      {data ? (
        <p>
          Logged in via GitHub as <b>{data.email}</b>.
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Account
