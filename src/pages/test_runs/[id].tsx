import api from '../../api'
import TestRun from '../../shared/TestRun'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from 'next/link'
import getQueryValue from '../../lib/query'

interface TestRunProps {
  testRun?: TestRun
  testSuites: TestSuite[]
}

const renderTestSuite = (testSuite: TestSuite) => {
  const testSuiteLink = `/test_suites/${testSuite.id}`
  return (
    <TableRow
      key={testSuite.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{ testSuite.name }</TableCell>
      <TableCell>{ testSuite.time }</TableCell>
      <TableCell>
        <Link href={testSuiteLink}>View test cases</Link>
      </TableCell>
    </TableRow>
  )
}

const TestRun: NextPage<TestRunProps> = ({ testRun, testSuites }: TestRunProps) => {
  return (
    <>
      <h1>Test Run { testRun && testRun.id }</h1>
      <p>
        Test suites
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testSuites.map((testSuite: TestSuite) => renderTestSuite(testSuite))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

TestRun.getInitialProps = async ({ query }): Promise<TestRunProps> => {
  const testRunId = getQueryValue(query, 'id')
  if (!testRunId) return { testSuites: [] }

  const testRun = await api.get(`/test_runs/${testRunId}`)
  const testSuites = await api.get(`/test_suites/`, { test_run: testRunId })
  return { testRun, testSuites }
}

export default TestRun
