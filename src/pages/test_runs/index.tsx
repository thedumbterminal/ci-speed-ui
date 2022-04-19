import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'
import Link from 'next/link'
import TestRun from '../../shared/TestRun'
import api from '../../api'
import { NextPage } from 'next'

interface TestRunsProps {
  testRuns: TestRun[]
}

const formatDate = (isoString: string): string => {
  const date = new Date(isoString)
  return format(date, 'MM/dd/yyyy kk:mm:ss')
}

const renderTestRun = (testRun: TestRun) => {
  const testRunLink = `/test_runs/${testRun.id}`
  return (
    <TableRow
      key={testRun.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{formatDate(testRun.created_at)}</TableCell>
      <TableCell>
        <Link href={testRunLink}>View test suites</Link>
      </TableCell>
    </TableRow>
  )
}

const TestRuns: NextPage<TestRunsProps> = ({ testRuns }: TestRunsProps) => {
  return (
    <>
      <h1>Test Runs</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Created</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testRuns.map((testRun: TestRun) => renderTestRun(testRun))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

TestRuns.getInitialProps = async (): Promise<TestRunsProps> => {
  const data = await api.get('/test_runs/')
  return { testRuns: data }
}

export default TestRuns
