import { Table } from 'react-bootstrap'
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
    <tr key={testRun.created_at}>
      <td>{formatDate(testRun.created_at)}</td>
      <td>
        <Link href={testRunLink}>View results</Link>
      </td>
    </tr>
  )
}

const TestRuns: NextPage<TestRunsProps> = ({ testRuns }: TestRunsProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test Runs</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testRuns.map((testRun: TestRun) => renderTestRun(testRun))}
        </tbody>
      </Table>
    </main>
  )
}

TestRuns.getInitialProps = async (): Promise<TestRunsProps> => {
  const data = await api.get('/test_runs/')
  return { testRuns: data }
}

export default TestRuns
