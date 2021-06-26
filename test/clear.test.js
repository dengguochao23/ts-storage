import BetterStorage from "../src";

describe('clear', () => {
  const bs = new BetterStorage('name')
  test('set storage', () => {
    const val = 'usa'
    expect(bs.set(val))
  })
  test('clear', () => {
    expect(bs.clear())
  })
  test('get none', () => {
    expect(bs.get).toThrow()
  })
})
