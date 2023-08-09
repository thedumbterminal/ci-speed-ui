import { Typography } from '@mui/material'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import TestPassPercentageSummary from '../components/TestPassPercentageSummary'
import { useProjectId } from '../lib/project'

const Summary = () => {
  const projectId = useProjectId()

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
