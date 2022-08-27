import { humanDateTimeFormat, humanDateFormat } from './date'

describe('date lib', () => {
  describe('humanDateTimeFormat()', () => {
    test('Returns a human readable date time', () => {
      const result = humanDateTimeFormat('2022-06-03T09:38:38.819257+00:00')
      expect(result).toBe('03/06/2022 10:38:38')
    })
  })

  describe('humanDateFormat()', () => {
    test('Returns a human readable date', () => {
      const result = humanDateFormat('2022-06-03T09:38:38.819257+00:00')
      expect(result).toBe('03/06/2022')
    })
  })
})
