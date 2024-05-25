import { GridRow } from '../components/Grid'

export default interface TestCaseRow extends GridRow {
  id: number
  name: string
  duration: number
  status: string
  failure_id: number | undefined
  skipped_id: number | undefined
}