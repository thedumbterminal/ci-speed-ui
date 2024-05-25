export default interface TestCase {
  name: string
  time: number
  id: number
  test_failures: Array<number>
  skipped_tests: Array<number>
}
