import api from '../../api'
import TestRun from '../../shared/TestRun'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import { Table } from 'react-bootstrap'
import Link from 'next/link'
import getQueryValue from '../../lib/query'

interface TestRunProps {
  testRun?: TestRun
  testSuites: TestSuite[]
}

const renderTestSuite = (testSuite: TestSuite) => {
  const testSuiteLink = `/test_suites/${testSuite.id}`
  return (
    <tr key={testSuite.id}>
      <td>{ testSuite.name }</td>
      <td>
        <Link href={testSuiteLink}>View test cases</Link>
      </td>
    </tr>
  )
}

const TestRun: NextPage<TestRunProps> = ({ testRun, testSuites }: TestRunProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test Run { testRun && testRun.id }</h1>
      <p>
        Test suites
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
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
  const testRunId = getQueryValue(query, 'id')
  if (!testRunId) return { testSuites: [] }

  const testRun = await api.get(`/test_runs/${testRunId}`)
  const testSuites = await api.get(`/test_suites/`, { test_run: testRunId })
  return { testRun, testSuites }
}

export default TestRun
