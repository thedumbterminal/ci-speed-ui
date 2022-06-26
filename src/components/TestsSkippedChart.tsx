import BarChart from '../components/BarChart'
import { api } from '../lib/api'
import useSWR from 'swr'

interface ProjectChartProps {
  projectId: string
}

const _getPageData = (id: string) => {
  const { data, error } = useSWR(`/projects/${id}/tests_skipped`, api.get)
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
      <p>Percentage of tests skipped per build</p>
      <BarChart height={200} data={data} xAxisLabel="Skipped" xAxisUnit="%" />
    </>
  )
}
