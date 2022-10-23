import { Typography } from '@mui/material'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import useLocalStorageState from 'use-local-storage-state'

const Summary = () => {
  const [projectId, _] = useLocalStorageState<number>('projectId', {
    defaultValue: 0,
  })

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Summary
      </Typography>
      {projectId && <TotalTestDurationSummary projectId={projectId} />}
    </>
  )
}

export default Summary
