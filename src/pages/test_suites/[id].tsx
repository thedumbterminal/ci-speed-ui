import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import api from '../../api'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import getQueryValue from '../../lib/query'

interface TestSuiteProps {
  testSuite?: TestSuite
  testCases: TestCase[]
}

interface TestCase {
  name: string,
  time: number,
  id: number
}

const renderTestCase = (testCase: TestCase) => {
  return (
    <TableRow
      key={testCase.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{ testCase.name }</TableCell>
      <TableCell>{ testCase.time }</TableCell>
    </TableRow>
  )
}

const TestSuite: NextPage<TestSuiteProps> = ({ testSuite, testCases }: TestSuiteProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test suite { testSuite && testSuite.name }</h1>
      <p>
        Test cases
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testCases.map((testCase: TestCase) => renderTestCase(testCase))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}

TestSuite.getInitialProps = async ({ query }): Promise<TestSuiteProps> => {
  const testSuiteId = getQueryValue(query, 'id')
  if (!testSuiteId) return { testCases: [] }

  const testSuite = await api.get(`/test_suites/${testSuiteId}`)
  const testCases = await api.get(`/test_cases/`, { test_suite: testSuiteId })
  return { testSuite, testCases }
}

export default TestSuite
