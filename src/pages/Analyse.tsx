import { Typography } from '@mui/material'
import NumBuildsChart from '../components/NumBuildsChart'
import NumTestsChart from '../components/NumTestsChart'
import TestDurationChart from '../components/TestDurationChart'
import TestSuccessChart from '../components/TestSuccessChart'
import TestsSkippedChart from '../components/TestsSkippedChart'
import { useProjectId } from '../lib/preferences'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import useLocalStorageState from 'use-local-storage-state'

const Analyse = () => {
  const projectId = useProjectId()
  let defaultValue: number = 30
  const [analyseDays, setAnalyseDays] = useLocalStorageState<number>('analyseDays', {
    defaultValue,
  })

  const _handleChange = (event: SelectChangeEvent): void => {
    const value = parseInt(event.target.value, 10)
    setAnalyseDays(value)
  }

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Analyse
      </Typography>
      <p>Duration</p>
      <Select
        labelId="duration-select-label"
        id="duration-select"
        value={analyseDays.toString()}
        label="Duration"
        onChange={_handleChange}
      >
        <MenuItem key="30" value="30">
          30 Days
        </MenuItem>
      </Select>
      {projectId && <NumBuildsChart projectId={projectId} />}
      {projectId && <NumTestsChart projectId={projectId} />}
      {projectId && <TestDurationChart projectId={projectId} />}
      {projectId && <TestSuccessChart projectId={projectId} />}
      {projectId && <TestsSkippedChart projectId={projectId} />}
    </>
  )
}

export default Analyse
