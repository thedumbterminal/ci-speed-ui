import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'
import XAxisDataType from '../types/XAxisDataType'
import { useAnalyseDays } from '../lib/preferences'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const days = useAnalyseDays()
  const { data, error } = useSWR(
    () => ({
      url: `/projects/${id.toString()}/test_success`,
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

const TestSuccessChart = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  return (
    <>
      <p>Percentage of successful tests per day</p>
      <BarChart
        height={200}
        data={data}
        xAxisLabel="Success"
        xAxisUnit="%"
        xAxisType={XAxisDataType.Date}
      />
    </>
  )
}

export default TestSuccessChart
