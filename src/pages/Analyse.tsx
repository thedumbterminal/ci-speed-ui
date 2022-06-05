import { Typography } from '@mui/material'
import BarChart from '../components/BarChart'
import ProjectSelect from '../components/ProjectSelect'
import { api } from '../lib/api'
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'
import { isoStringFormat } from '../lib/date'
import * as React from 'react'
import Project from '../shared/Project'
import { SelectChangeEvent } from '@mui/material/Select'

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
  const { data, error } = useSWR(
    `/projects/${id}/num_tests`,
    api.get
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const Analyse = () => {
  let numTests: NumTest[] = []
  let [searchParams, setSearchParams] = useSearchParams()
  let projectFromSearch = searchParams.get('projectId')

  const [projectId, setProjectId] = React.useState<string>(projectFromSearch || '')

  if(projectId) {
    console.log('got project id')
    const { data, error } = _getPageData(projectId)
    if (error) throw error
    if (data?.numTests) {
      numTests = _transformNumTests(data.numTests)
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    console.log('change', value)
    setProjectId(value)
    const search = {
      projectId: value
    }
    setSearchParams(search, { replace: true })
  }

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Analyse
      </Typography>
      <ProjectSelect projectId={projectId} onChange={handleChange}/>
      <p>Number of tests over time</p>
      <BarChart height={200} data={numTests} />
    </>
  )
}

export default Analyse
