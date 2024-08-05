import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import theme from '../theme'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import AuthProvider from '../hooks/AuthProvider'

const styles = {
  'pre.terminal': {
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
  },
}

const inputGlobalStyles = <GlobalStyles styles={styles} />

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {inputGlobalStyles}
      <ErrorBoundary>
        <AuthProvider>
          <Layout>
            <Outlet />
          </Layout>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
