import api from '../../api'
import TestSuite from '../../shared/TestSuite'
import { NextPage } from 'next'
import { Table } from 'react-bootstrap'
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
    <tr key={testCase.id}>
      <td>{ testCase.name }</td>
      <td>{ testCase.time }</td>
    </tr>
  )
}

const TestSuite: NextPage<TestSuiteProps> = ({ testSuite, testCases }: TestSuiteProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test suite { testSuite && testSuite.name }</h1>
      <p>
        Test cases
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testCase: TestCase) => renderTestCase(testCase))}
        </tbody>
      </Table>

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
