import { first } from '../src/index'

describe('first', () => {
  test('check', () => {
    const result = first(2, 4)
    expect(first(2, 4)).toBe(6)
  })
})
