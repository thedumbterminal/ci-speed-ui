import { useContext, createContext } from 'react'
import { Api } from '../lib/api'
import useSWR from 'swr'

interface User {
  id: number
  email: string
  active: boolean
}

const AuthContext = createContext<User|null>(null)

const _getUserInfo = () => {
  const { data, error } = useSWR('/user/', Api.simpleGet)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const AuthProvider = ({ children }) => {
  const { data: currentUser } = _getUserInfo()
  // console.log('currentUser', currentUser)

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
