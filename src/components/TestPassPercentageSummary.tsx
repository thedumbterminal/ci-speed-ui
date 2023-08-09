import { Api } from '../lib/api'
import useSWR from 'swr'
import { Typography } from '@mui/material'

interface ProjectChartProps {
  projectId: number
}

const _getPageData = (id: number) => {
  const { data, error } = useSWR(
    `/projects/${id.toString()}/test_pass_percentage`,
    Api.simpleGet,
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const _humanPercent = (amount: number = 0): string => {
  if (!amount) return 'No data yet'
  return amount.toFixed(2) + ' %'
}

const testPassPercentageSummary = (props: ProjectChartProps) => {
  const { data, error } = _getPageData(props.projectId)
  if (error) throw error
  const humanPercent = _humanPercent(data)
  return (
    <>
      <p>Test pass percentage</p>
      <Typography variant="h3" component="h3" gutterBottom>
        {humanPercent}
      </Typography>
    </>
  )
}

export default testPassPercentageSummary
