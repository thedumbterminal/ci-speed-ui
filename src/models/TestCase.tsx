import ITestCase from '../types/TestCase'
import ITestCaseRow from '../types/TestCaseRow'

class TestCase {
  static _statusForTestCase(test: ITestCase): string {
    if (test.test_failures.length) return 'Failure'
    if (test.skipped_tests.length) return 'Skipped'
    return 'Success'
  }

  static _transformRow(item: ITestCase) {
    const failure_id = item.test_failures[0]
    const skipped_id = item.skipped_tests[0]
    return {
      id: item.id,
      name: item.name,
      duration: item.time,
      status: this._statusForTestCase(item),
      failure_id,
      skipped_id,
    }
  }

  static transformRows(testCases: ITestCase[]): ITestCaseRow[] {
    return testCases.map(this._transformRow)
  }

}

export default TestCase
