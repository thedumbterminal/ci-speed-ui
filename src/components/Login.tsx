import * as React from 'react'
import { absoluteURL } from '../lib/api'
import Link from '@mui/material/Link'

const Login = () => {
  const loginURL = absoluteURL('/login')
  return (
    <>
    <p>
      <Link href={loginURL}>Please login</Link>
    </p>
    </>
  )
}

export default Login
