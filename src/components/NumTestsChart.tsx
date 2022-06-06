import BarChart from '../components/BarChart'
import { isoStringFormat } from '../lib/date'
import { api } from '../lib/api'
import useSWR from 'swr'

interface NumTestsChartProps {
  projectId: string
}

interface NumTest {
  x: string
  y: number
}

const _getPageData = (id: string) => {
  const { data, error } = useSWR(`/projects/${id}/num_tests`, api.get)
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const _transformNumTests = (numTests: NumTest[]): NumTest[] => {
  return numTests.map((item: NumTest) => {
    return {
      x: isoStringFormat(item.x),
      y: item.y,
    }
  })
}

export default (props: NumTestsChartProps) => {
  let numTests: NumTest[] = []
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  if (data) {
    numTests = _transformNumTests(data)
  }
  return (
    <>
      <p>Number of tests over time</p>
      <BarChart height={200} data={numTests} />
    </>
  )
}
