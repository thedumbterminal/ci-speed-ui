import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { humanDateTimeFormat } from '../lib/date'
import { Link, useSearchParams } from 'react-router-dom'
import TestRun from '../types/TestRun'
import TestCaseRow from '../types/TestCaseRow'
import { Api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { Grid, GridRow } from '../components/Grid'
import TestCase from '../models/TestCase'

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

const transformTestRunRows = (testRuns: TestRun[]): TestRunRow[] => {
  return testRuns.map((item: TestRun) => {
    return {
      id: item.id,
      created: item.created_at,
      fileName: item.file_name,
    }
  })
}

const transformSlowCasesRows = (testRuns: TestRun[]): TestRunRow[] => {
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
  const { data: slowCases, error: slowError } = useSWR(
    () => ({ url: '/slow_test_cases/', params: { build_id: build.id + '' } }),
    Api.get,
  )
  const { data: testRuns, error: runError } = useSWR(
    () => ({ url: '/test_runs/', params: { build_id: build.id + '' } }),
    Api.get,
  )
  return {
    data: { build, slowCases, testRuns },
    error: projectError || slowError || runError,
    isLoading: {
      testRuns: !runError && !testRuns,
      slowCases: !slowError && !slowCases
    }
  }
}

const Build = () => {
  let [searchParams] = useSearchParams()
  let buildId = searchParams.get('id')
  let testRuns: TestRunRow[] = []
  let slowCases: TestCaseRow[] = []
  if (!buildId) throw new Error('No build ID given')
  const { data, error, isLoading } = _getPageData(buildId)
  if (error) throw error
  if (data?.testRuns) {
    testRuns = transformTestRunRows(data.testRuns)
  }
  if (data?.slowCases) {
    slowCases = TestCase.transformRows(data.slowCases)
  }

  return (
    <>
      <Typography variant="h2" component="h3">
        Build {data.build && data.build.ref}
      </Typography>
      <p>
        Slowest test cases for this build:
      </p>
      <Grid rows={slowCases} columns={slowCasesColumns} isLoading={isLoading.slowCases} />
      <p>
        Test runs for this build:
      </p>
      <Grid rows={testRuns} columns={testRunColumns} isLoading={isLoading.testRuns} />
    </>
  )
}

export default Build
