import { api } from '../lib/api'
import useSWR from 'swr'
import LoadingButton from '@mui/lab/LoadingButton'
import * as React from 'react'

interface UserInfoProps {
  data: UserInfo
}

interface UserInfo {
  email: string
}

const _generateApiKey = () => {
  const { data, error } = useSWR('/user/', api.get)
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

const ApiKey = () => {
  //const {data, error, isLoading} = _getUserInfo()
  //console.log('error:', error)
  //console.log('data:', data)
  //let stateComponent
  //if(!data){
  //  stateComponent = <Login />
  //} else {
  //  stateComponent = <Info data={data}/>
  //}
  const [loading, setLoading] = React.useState(false)
  const [apiKey, setApiKey] = React.useState(null)

  const _generateClick = () => {
    console.log('_generateClick()')
    setLoading(true)
  }

  const loadingButton = <LoadingButton
    loading={loading}
    variant="contained"
    onClick={_generateClick}
    loadingIndicator="Generating..."
  >Generate API Key</LoadingButton>

  return (
    <>
      <h1>API Key</h1>
      <p>
        In order to access CI-Speed from CLI tools, please generate an API using the button below.
      </p>
    </>
  )
}

export default ApiKey
