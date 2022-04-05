import { Table } from 'react-bootstrap'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'

interface TestRun {
  created_at: string,
  id: number
}

interface TestRunProps {
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
        <Link href={testRunLink}>View</Link>
      </td>
    </tr>
  )
}

const TestRuns = ({ testRuns }: TestRunProps) => {
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

TestRuns.getInitialProps = async (): Promise<TestRunProps> => {
  const { data } = await axios.get('https://ci-speed.herokuapp.com/test_runs/')
  return { testRuns: data }
}

export default TestRuns
