import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'
import { useAnalyseDays } from '../lib/preferences'


interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const analyseDays = useAnalyseDays()
  const { data, error } = useSWR(
    `/projects/${id.toString()}/test_duration`,
    Api.simpleGet,
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const TestDurationChart = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  return (
    <>
      <p>Duration of tests per build</p>
      <BarChart
        height={200}
        data={data}
        xAxisLabel="Duration"
        xAxisUnit="Secs"
      />
    </>
  )
}

export default TestDurationChart
