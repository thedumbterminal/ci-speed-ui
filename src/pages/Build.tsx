import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { humanDateTimeFormat } from '../lib/date'
import { Link, useSearchParams } from 'react-router-dom'
import TestRun from '../shared/TestRun'
import { Api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { Grid, GridRow } from '../components/Grid'

interface TestRunRow extends GridRow {
  created: string
}

const formatDate = (value: string): string => {
  return humanDateTimeFormat(value)
}

const formatLink = (value: string): string => {
  return `/test_run/?id=${value}`
}

const transformRows = (testRuns: TestRun[]): TestRunRow[] => {
  return testRuns.map((item: TestRun) => {
    return {
      id: item.id,
      created: item.created_at,
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View test run</Link>
}

const columns: GridColDef[] = [
  {
    field: 'created',
    headerName: 'Created',
    width: 160,
    valueFormatter: formatDate,
  },
  {
    field: 'id',
    headerName: 'View',
    width: 160,
    valueFormatter: formatLink,
    renderCell: renderLinkCell,
  },
]

const _getPageData = (id: string) => {
  const { data: build, error: projectError } = useSWR(
    '/builds/' + id,
    Api.simpleGet,
  )
  const { data: testRuns, error: runError } = useSWR(
    () => ({ url: '/test_runs/', params: { build_id: build.id + '' } }),
    Api.get,
  )
  return {
    data: { build, testRuns },
    error: projectError || runError,
    isLoading: !runError && !testRuns,
  }
}

const Build = () => {
  let [searchParams] = useSearchParams()
  let buildId = searchParams.get('id')
  let testRuns: TestRunRow[] = []
  if (!buildId) throw new Error('No build ID given')
  const { data, error, isLoading } = _getPageData(buildId)
  if (error) throw error
  if (data?.testRuns) {
    testRuns = transformRows(data.testRuns)
  }

  return (
    <>
      <Typography variant="h2" component="h3">
        Build
      </Typography>
      <p>
        Test runs for <b>{data.build && data.build.ref}</b>.
      </p>
      <Grid rows={testRuns} columns={columns} isLoading={isLoading} />
    </>
  )
}

export default Build
