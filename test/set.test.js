import BetterStorage from '../src'
describe('set', () => {
  const bs = new BetterStorage('name')
  test('set storage', () =>{
    const val = 'usa'
    expect(bs.set(val))
  })
  test('set storage', () =>{
    expect(bs.set).toThrow()
  })
})

describe('set', () => {
  const bs = new BetterStorage('name')
  test('set storage', () =>{
    const val = 12
    expect(bs.set(val))
  })
  test('set storage', () =>{
    expect(bs.set).toThrow()
  })
})

