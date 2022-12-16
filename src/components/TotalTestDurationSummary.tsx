import { Api } from '../lib/api'
import useSWR from 'swr'
import { formatDistanceStrict } from 'date-fns'
import { Typography } from '@mui/material'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const { data, error } = useSWR(
    `/projects/${id.toString()}/total_test_duration`,
    Api.simpleGet
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const _humanDuration = (seconds: number = 0): string => {
  if (!seconds) return 'No data yet'
  const start = new Date(0)
  const end = new Date(seconds * 1000)
  return formatDistanceStrict(end, start)
}

export default (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  const humanDuration = _humanDuration(data)
  return (
    <>
      <p>Total Test Duration</p>
      <Typography variant="h3" component="h3" gutterBottom>
        {humanDuration}
      </Typography>
    </>
  )
}
