import { useContext, createContext } from 'react'
const AuthContext = createContext(2)

const AuthProvider = ({ children }) => {
  const currentUser = 1
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

///export const useAuth = () => {
// return useContext(AuthContext);
//};
