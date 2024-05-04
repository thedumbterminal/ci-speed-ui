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
  fileName: string
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
      fileName: item.file_name,
    }
  })
}

const renderLinkCell = (params: GridRenderCellParams) => {
  const formatted = params.formattedValue as string
  return <Link to={formatted}>View test run</Link>
}

const testRunColumns: GridColDef[] = [
  {
    field: 'created',
    headerName: 'Created',
    width: 160,
    valueFormatter: formatDate,
  },
  {
    field: 'fileName',
    headerName: 'File Name',
    width: 160,
  },
  {
    field: 'id',
    headerName: 'View',
    width: 160,
    valueFormatter: formatLink,
    renderCell: renderLinkCell,
  },
]

const slowCasesColumns: GridColDef[] = []

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
  const { data, error, isLoading: testRunsIsLoading } = _getPageData(buildId)
  if (error) throw error
  if (data?.testRuns) {
    testRuns = transformRows(data.testRuns)
  }

  const slowCases = []
  const slowCasesIsLoading = true

  return (
    <>
      <Typography variant="h2" component="h3">
        Build {data.build && data.build.ref}
      </Typography>
      <p>
        Slowest test cases for this build:
      </p>
      <Grid rows={slowCases} columns={slowCasesColumns} isLoading={slowCasesIsLoading} />
      <p>
        Test runs for this build:
      </p>
      <Grid rows={testRuns} columns={testRunColumns} isLoading={testRunsIsLoading} />
    </>
  )
}

export default Build
