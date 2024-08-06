import React, { Component, ErrorInfo, ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import Layout from './Layout'
import Link from '@mui/material/Link'

interface Props {
  children: ReactNode
}

interface State {
  hasError: null | Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: null,
  }

  public static getDerivedStateFromError(e: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: e }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError !== null) {
      return (
        <>
          <Layout>
            <Typography variant="h2" component="h3">
              Sorry...
            </Typography>
            <p>There was an error:</p>
            <code>{this.state.hasError.message}</code>
            <p>
              Please raise an issue on our{' '}
              <Link
                href="https://github.com/thedumbterminal/ci-speed-ui/issues"
                target="_blank"
                title="Log issue"
              >
                GitHub Project
              </Link>
              .
            </p>
          </Layout>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
