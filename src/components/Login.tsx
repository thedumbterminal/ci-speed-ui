import * as React from 'react'
import { absoluteURL } from '../lib/api'
import Link from '@mui/material/Link'

const Login = () => {
  const loginURL = absoluteURL('/login')
  return (
    <>
      <p>Please login to gain access to CI-Speed features.</p>
      <p>
        <Link href={loginURL}>Login via OAUTH with GitHub</Link>
      </p>
    </>
  )
}

export default Login
