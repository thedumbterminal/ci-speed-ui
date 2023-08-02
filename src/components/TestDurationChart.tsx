import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
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

export default (props: ProjectChartProps) => {
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
