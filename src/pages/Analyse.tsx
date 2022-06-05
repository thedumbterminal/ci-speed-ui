import { Typography } from '@mui/material'
import BarChart from '../components/BarChart'
import { api } from '../lib/api'
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'
import { isoStringFormat } from '../lib/date'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react'

interface NumTest {
  x: string
  y: number
}

const _transformNumTests = (numTests: NumTest[]): NumTest[] => {
  return numTests.map((item: NumTest) => {
    return {
      x: isoStringFormat(item.x),
      y: item.y,
    }
  })
}

const _getPageData = (id: string) => {
  const { data: project, error: projectError } = useSWR(
    '/projects/' + id,
    api.get
  )
  const { data: numTests, error: numTestsError } = useSWR(
    () => `/projects/${id}/num_tests`,
    api.get
  )
  return {
    data: { project, numTests },
    error: projectError || numTestsError,
    isLoading: !numTestsError && !numTests,
  }
}

const Analyse = () => {
  let numTests: NumTest[] = []
  let [searchParams] = useSearchParams()
  //let projectId = searchParams.get('id')
  let projectId = "3"

  if(!projectId) throw new Error('No project ID given')
  const { data, error } = _getPageData(projectId)
  if (error) throw error
  if (data?.numTests) {
    numTests = _transformNumTests(data.numTests)
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setAge(value);
  };

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Analyse
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Projct"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <p>Number of tests over time</p>
      <BarChart height={200} data={numTests} />
    </>
  )
}

export default Analyse
