import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import useLocalStorageState from 'use-local-storage-state'

const Summary = () => {
  const [projectId, _] = useLocalStorageState<string>('projectId', {
    defaultValue: '',
  })

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Summary
      </Typography>
      <ProjectSelect />
      {projectId && <TotalTestDurationSummary projectId={projectId} />}
    </>
  )
}

export default Summary
