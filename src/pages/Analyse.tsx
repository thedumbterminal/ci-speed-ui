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
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const _renderMenuItem = (days: Number) => {
  return (
    <MenuItem key={days.toString()} value={days.toString()}>
      {days + ' days'}
    </MenuItem>
  )
}

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

  const dayOptions = [7, 14, 30, 60, 90, 365]

  return (
    <>
      <Typography variant="h2" component="h3" gutterBottom>
        Analyse
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="duration-select-label">Duration</InputLabel>
        <Select
          labelId="duration-select-label"
          id="duration-select"
          value={analyseDays.toString()}
          label="Duration"
          onChange={_handleChange}
        >
          {dayOptions.map(_renderMenuItem)}
        </Select>
      </FormControl>
      {projectId && <NumBuildsChart projectId={projectId} />}
      {projectId && <NumTestsChart projectId={projectId} />}
      {projectId && <TestDurationChart projectId={projectId} />}
      {projectId && <TestSuccessChart projectId={projectId} />}
      {projectId && <TestsSkippedChart projectId={projectId} />}
    </>
  )
}

export default Analyse
