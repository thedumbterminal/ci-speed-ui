import { Typography } from '@mui/material'
import ProjectSelect from '../components/ProjectSelect'
import NumBuildsChart from '../components/NumBuildsChart'
import NumTestsChart from '../components/NumTestsChart'
import TestDurationChart from '../components/TestDurationChart'
import TestSuccessChart from '../components/TestSuccessChart'
import TestsSkippedChart from '../components/TestsSkippedChart'
import { useSearchParams } from 'react-router-dom'
import * as React from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const Analyse = () => {
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
        Analyse
      </Typography>
      <ProjectSelect projectId={projectId} onChange={handleChange} />
      {projectId && <NumBuildsChart projectId={projectId} />}
      {projectId && <NumTestsChart projectId={projectId} />}
      {projectId && <TestDurationChart projectId={projectId} />}
      {projectId && <TestSuccessChart projectId={projectId} />}
      {projectId && <TestsSkippedChart projectId={projectId} />}
    </>
  )
}

export default Analyse
