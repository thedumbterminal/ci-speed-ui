import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import NumBuildsChart from '../components/NumBuildsChart'
import { useSearchParams } from 'react-router-dom'
import * as React from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const Summary = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let projectFromSearch = searchParams.get('projectId')

  const [projectId, setProjectId] = React.useState<string>(
    projectFromSearch || ''
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
      {projectId && <NumBuildsChart projectId={projectId} />}
    </>
  )
}

export default Summary
