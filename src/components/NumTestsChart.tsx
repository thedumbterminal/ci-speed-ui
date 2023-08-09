import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const { data, error } = useSWR(
    `/projects/${id.toString()}/num_tests`,
    Api.simpleGet,
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const NumTestsChart = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  return (
    <>
      <p>Number of tests per build</p>
      <BarChart height={200} data={data} xAxisLabel="Tests" />
    </>
  )
}

export default NumTestsChart
