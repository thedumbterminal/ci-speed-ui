import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import theme from '../theme'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      'pre.failure': {
        color: 'white',
        'background-color': 'black',
        padding: '10px',
      },
    }}
  />
)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {inputGlobalStyles}
      <ErrorBoundary>
        <Layout>
          <Outlet />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
