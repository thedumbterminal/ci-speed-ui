import api from '../../api'
import TestRun from '../../shared/TestRun'
import { NextPage } from 'next'
import { Table } from 'react-bootstrap'
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'

interface TestRunProps {
  testRun?: TestRun
  testSuites: TestSuite[]
}

interface TestSuite {
  name: string,
  id: number
}

const renderTestSuite = (testSuite: TestSuite) => {
  const testSuiteLink = `/test_suites/${testSuite.id}`
  return (
    <tr>
      <td>{ testSuite.name }</td>
      <td>
        <Link href={testSuiteLink}>View test cases</Link>
      </td>
    </tr>
  )
}

const TestSuite: NextPage<TestRunProps> = ({ testRun, testSuites }: TestRunProps) => {
  return (
    <main className="main-container container-fluid">
      <h1>Test suite { testRun && testRun.id }</h1>
      <p>
        Test cases
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

const getQueryValue = (query: ParsedUrlQuery, field: string): string|undefined => {
  const value = query[field]
  if(Array.isArray(value)) return value.shift()
  return value
}

TestSuite.getInitialProps = async ({ query }): Promise<TestRunProps> => {
  const testRunId = getQueryValue(query, 'id')
  if (!testRunId) return { testSuites: [] }

  const testRun = await api.get(`/test_runs/${testRunId}`)
  const testSuites = await api.get(`/test_suites/`, { test_run: testRunId })
  return { testRun, testSuites }
}

export default TestSuite
