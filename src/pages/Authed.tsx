import { Outlet } from 'react-router-dom'
import AuthedLayout from '../components/AuthedLayout'
import AuthProvider from '../hooks/AuthProvider'

export default function Authed() {
  return (
    <AuthProvider>
      <AuthedLayout>
        <Outlet />
      </AuthedLayout>
    </AuthProvider>
  )
}
