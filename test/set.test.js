// const BetterStorage = require('../src/storage')
import BetterStorage from '../src'
describe('set and get', () => {
  const bs = new BetterStorage('name')
  test('set storage', () =>{
    const val = 'usa'
    expect(bs.set(val))
  })
  test('get storage', () =>{
    let name = bs.get('name')
    expect(name).toBe('usa')
  })
})
describe('get all', () =>{
  const bs = new BetterStorage('name')
  test('get all', () =>{
    expect(bs.getAll())
  })
})
describe('remove', () =>{
  const bs = new BetterStorage('name')
  test('remove', () =>{
    expect(bs.remove('name'))
  })
})
describe('clear', () =>{
  const bs = new BetterStorage('name')
  test('clear', () =>{
    expect(bs.clear())
  })
})
describe('clear', () =>{
  const bs = new BetterStorage('name')
  test('clear', () =>{
    expect(bs.clear())
  })
})
