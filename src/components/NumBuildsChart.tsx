import BarChart from '../components/BarChart'
import { Api } from '../lib/api'
import useSWR from 'swr'
import XAxisDataType from '../shared/XAxisDataType'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const { data, error } = useSWR(
    `/projects/${id.toString()}/num_builds`,
    Api.simpleGet,
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const NumBuildsChart = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  return (
    <>
      <p>Number of builds per day</p>
      <BarChart
        height={200}
        data={data}
        xAxisLabel="Builds"
        xAxisType={XAxisDataType.Date}
      />
    </>
  )
}

export default NumBuildsChart
