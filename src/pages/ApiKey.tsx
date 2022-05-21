import { api } from '../lib/api'
import useSWR from 'swr'
import LoadingButton from '@mui/lab/LoadingButton'
import * as React from 'react'
import { TextareaAutosize, Typography } from '@mui/material'

interface GenerateButtonProps {
  loading: boolean
  onClick: () => void
}

const _generateApiKey = () => {
  const { data, error } = useSWR('/token/', api.post)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const TokenDisplay = () => {
  const {data, error, isLoading} = _generateApiKey()
  return (
    <>
      <p>
        Your API key is:
      </p>
      <TextareaAutosize
        defaultValue={data && data.token}
      ></TextareaAutosize>
      <p>
        Please copy this key as it will be not shown again.
      </p>
    </>
  )
}

const GenerateButton = ({loading, onClick}: GenerateButtonProps) => {
  return (
    <>
      <p>
        In order to access CI-Speed programmatically or from CLI tools, please generate an API key using the button below.
      </p>
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={onClick}
        loadingIndicator="Generating..."
      >Generate API Key</LoadingButton>
    </>
  )
}

const ApiKey = () => {
  const [loading, setLoading] = React.useState(false)
  
  const _generateClick = () => {
    console.log('_generateClick()')
    setLoading(true)
  }

  let stateComponent
  if(loading) {
    stateComponent = <TokenDisplay />
  } else {
    stateComponent = <GenerateButton loading={loading} onClick={_generateClick} />
  }

  return (
    <>
      <Typography variant="h2" component="h2">API Key</Typography>
       {stateComponent}
    </>
  )
}

export default ApiKey
