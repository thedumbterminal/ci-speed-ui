import { Typography } from '@mui/material'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import TestPassPercentageSummary from '../components/TestPassPercentageSummary'
import { useProjectId } from '../lib/preferences'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

const Summary = () => {
  const projectId = useProjectId()

  const user = useAuth()
  if (!user) {
    console.log('Redirecting to login...')
    return <Navigate to="/login" />
  }

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Summary
      </Typography>
      {projectId && <TotalTestDurationSummary projectId={projectId} />}
      {projectId && <TestPassPercentageSummary projectId={projectId} />}
    </>
  )
}

export default Summary
