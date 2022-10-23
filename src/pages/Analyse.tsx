import { Typography } from '@mui/material'
import NumBuildsChart from '../components/NumBuildsChart'
import NumTestsChart from '../components/NumTestsChart'
import TestDurationChart from '../components/TestDurationChart'
import TestSuccessChart from '../components/TestSuccessChart'
import TestsSkippedChart from '../components/TestsSkippedChart'
import { getProjectId } from '../lib/project'

const Analyse = () => {
  const projectId = getProjectId()

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Analyse
      </Typography>
      {projectId && <NumBuildsChart projectId={projectId} />}
      {projectId && <NumTestsChart projectId={projectId} />}
      {projectId && <TestDurationChart projectId={projectId} />}
      {projectId && <TestSuccessChart projectId={projectId} />}
      {projectId && <TestsSkippedChart projectId={projectId} />}
    </>
  )
}

export default Analyse
