import { Typography } from '@mui/material'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import { getProjectId } from '../lib/project'

const Summary = () => {
  const projectId = getProjectId()

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Summary
      </Typography>
      {projectId && <TotalTestDurationSummary projectId={projectId} />}
    </>
  )
}

export default Summary
