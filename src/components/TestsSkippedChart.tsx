import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'
import { useAnalyseDays } from '../lib/preferences'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const days = useAnalyseDays()
  const { data, error } = useSWR(
    () => ({
      url: `/projects/${id.toString()}/tests_skipped`,
      params: { days },
    }),
    Api.get,
  )

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const TestsSkippedChart = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  return (
    <>
      <p>Percentage of tests skipped per build</p>
      <BarChart height={200} data={data} xAxisLabel="Skipped" xAxisUnit="%" />
    </>
  )
}

export default TestsSkippedChart
