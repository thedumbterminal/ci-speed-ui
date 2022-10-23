import { api } from '../lib/api'
import useSWR from 'swr'
import Typography from '@mui/material/Typography'
import { useSearchParams } from 'react-router-dom'

const _getPageData = (id: string) => {
  const { data: skippedTests, error: skippedError } = useSWR(
    '/skipped_tests/' + id,
    api.get
  )
  const { data: testCase, error: caseError } = useSWR(
    () => '/test_cases/' + skippedTests.test_case_id,
    api.get
  )
  return {
    data: { testCase, skippedTests },
    error: caseError || skippedError,
    isLoading: !skippedError && !skippedTests,
  }
}

const SkippedTest = () => {
  let [searchParams] = useSearchParams()
  let testCaseId = searchParams.get('id')
  if (!testCaseId) throw new Error('No test case ID given')
  const { data, error } = _getPageData(testCaseId)
  if (error) throw error

  return (
    <>
      <Typography variant="h2" component="h3">
        Skipped Test
      </Typography>
      <p>
        Skipped test reason for test case <b>{data?.testCase?.name}</b>.
      </p>
      <br />
      <pre className="terminal">
        <code>{data?.skippedTests?.reason}</code>
      </pre>
    </>
  )
}

export default SkippedTest
