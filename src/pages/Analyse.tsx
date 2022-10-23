import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import NumBuildsChart from '../components/NumBuildsChart'
import NumTestsChart from '../components/NumTestsChart'
import TestDurationChart from '../components/TestDurationChart'
import TestSuccessChart from '../components/TestSuccessChart'
import TestsSkippedChart from '../components/TestsSkippedChart'
import useLocalStorageState from 'use-local-storage-state'

const Analyse = () => {
  const [projectId, _] = useLocalStorageState<string>('projectId', {
    defaultValue: '',
  })

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Analyse
      </Typography>
      <ProjectSelect />
      {projectId && <NumBuildsChart projectId={projectId} />}
      {projectId && <NumTestsChart projectId={projectId} />}
      {projectId && <TestDurationChart projectId={projectId} />}
      {projectId && <TestSuccessChart projectId={projectId} />}
      {projectId && <TestsSkippedChart projectId={projectId} />}
    </>
  )
}

export default Analyse
