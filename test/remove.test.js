import BetterStorage from "../src";

describe('remove', () =>{
  const bs = new BetterStorage('name')
  test('set storage', () => {
    const val = 'usa'
    expect(bs.set(val))
  })
  test('remove', () =>{
    expect(bs.remove('name'))
  })
})

describe('remove', () =>{
  const bs = new BetterStorage()
  test('set storage', () => {
    const val = 'usa'
    expect(bs.set(val))
  })
  test('remove', () =>{
    expect(bs.remove())
  })
})
