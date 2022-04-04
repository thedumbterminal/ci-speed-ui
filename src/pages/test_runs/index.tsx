import { Table } from 'react-bootstrap'
import axios from 'axios'

interface TestRun {
  created_at: string
}

interface TestRunProps {
  testRuns: TestRun[]
}

const renderTestRun = (testRun: TestRun) => {
  return (
    <tr key={testRun.created_at}>
      <td>{testRun.created_at}</td>
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
