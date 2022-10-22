import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import TotalTestDurationSummary from '../components/TotalTestDurationSummary'
import { useSearchParams } from 'react-router-dom'
import { SelectChangeEvent } from '@mui/material/Select'
import useLocalStorageState from 'use-local-storage-state'

const Summary = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let projectFromSearch = searchParams.get('projectId')

  const [projectId, setProjectId] = useLocalStorageState<string>(
    'projectId', {
      defaultValue: projectFromSearch || ''
    }
  )


  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setProjectId(value)
    const search = {
      projectId: value,
    }
    setSearchParams(search, { replace: true })
  }

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Summary
      </Typography>
      <ProjectSelect projectId={projectId} onChange={handleChange} />
      {projectId && <TotalTestDurationSummary projectId={projectId} />}
    </>
  )
}

export default Summary
