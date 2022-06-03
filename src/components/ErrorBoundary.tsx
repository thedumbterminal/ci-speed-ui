import React, { Component, ErrorInfo, ReactNode } from 'react'
import Typography from '@mui/material/Typography'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <Typography variant="h2" component="h2">
            Sorry...
          </Typography>
          <p>there was an error.</p>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
