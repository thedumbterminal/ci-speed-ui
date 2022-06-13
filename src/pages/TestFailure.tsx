import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { useSearchParams } from 'react-router-dom'

interface TestCaseRow {
  id: number
  name: string
  duration: number
  status: string
  failure_id: number | undefined
}

interface TestCase {
  name: string
  time: number
  id: number
  test_failures: Array<number>
}

const _getPageData = (id: string) => {
  const { data: testFailures, error: failureError } = useSWR(
    '/test_failures/' + id,
    api.get
  )
  const { data: testCase, error: caseError } = useSWR(
    () => '/test_cases/' + testFailures.test_case_id,
    api.get
  )
  return {
    data: { testCase, testFailures },
    error: caseError || failureError,
    isLoading: !failureError && !testFailures,
  }
}

const TestFailure = () => {
  let [searchParams] = useSearchParams()
  let testCaseId = searchParams.get('id')
  if (!testCaseId) throw new Error('No test case ID given')
  const { data, error } = _getPageData(testCaseId)
  if (error) throw error

  return (
    <>
      <Typography variant="h2" component="h2">
        Test Failure
      </Typography>
      <p>
        Test failure reason for test case <b>{data?.testCase?.name}</b>.
      </p>
      <br />
      <pre className="failure">
        <code>{data?.testFailures?.reason}</code>
      </pre>
    </>
  )
}

export default TestFailure
