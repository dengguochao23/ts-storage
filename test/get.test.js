import BetterStorage from "../src";

describe('get error', () =>{
  const bs = new BetterStorage()
  test('get', () =>{
    expect(bs.get).toThrow()
  })
})
describe('get by name1', () =>{
  const bs = new BetterStorage('name')
  test('set storage', () =>{
    const val = 'usa'
    expect(bs.set(val))
  })
  test('get', () =>{
    expect(bs.get('name')).toBe('usa')
  })
})
describe('get by name2', () =>{
  const bs = new BetterStorage()
  test('set storage', () =>{
    const val = 'usa'
    expect(bs.set('name', val))
  })
  test('get', () =>{
    expect(bs.get('name')).toBe('usa')
  })
  test('get all', () =>{
    expect(bs.getAll())
  })
})

