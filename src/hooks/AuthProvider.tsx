import { useContext, createContext } from 'react'
import { Api } from '../lib/api'
import useSWR from 'swr'
import { Navigate } from 'react-router-dom'

interface User {
  id: number
  email: string
  active: boolean
}

const AuthContext = createContext<User | null>(null)

const _getUserInfo = () => {
  const { data, error } = useSWR('/user/', Api.simpleGet)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const AuthProvider = ({ children }) => {
  const { data: currentUser, isLoading } = _getUserInfo()

  // We waiting until the auth check has finished before rending the page
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!currentUser) {
    console.log('Redirecting to login...')
    return <Navigate to="/login" />
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
