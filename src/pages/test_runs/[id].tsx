import api from '../../api'
import TestRun from '../../shared/TestRun'
import { NextPage } from 'next'
import { Table } from 'react-bootstrap'

interface TestRunProps {
  testRun?: TestRun
  testSuites: TestSuite[]
}

interface TestSuite {
  created_at: string,
  id: number
}

const renderTestSuite = (testSuite: TestSuite) => {
  return (
    <tr>
      <td></td>
      <td>
      </td>
    </tr>
  )
}

const TestRun: NextPage<TestRunProps> = ({ testRun, testSuites }: TestRunProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test Run { testRun && testRun.id }</h1>
      <p>
        Results
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testSuites.map((testSuite: TestSuite) => renderTestSuite(testSuite))}
        </tbody>
      </Table>

    </main>
  )
}

TestRun.getInitialProps = async ({ query }): Promise<TestRunProps> => {
  if (!query.id) return { testSuites: [] }

  const testRun = await api.get(`/test_runs/${query.id}`)
  const testSuites = await api.get(`/test_suites/`)
  return { testRun, testSuites }
}

export default TestRun
