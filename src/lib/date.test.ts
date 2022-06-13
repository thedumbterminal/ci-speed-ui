import { isoStringFormat } from './date'

describe('date lib', () => {
  describe('isoStringFormat()', () => {
    test('Returns a human readable date', () => {
      const result = isoStringFormat('2022-06-03T09:38:38.819257+00:00')
      expect(result).toBe('03/06/2022 10:38:38')
    })
  })
})
