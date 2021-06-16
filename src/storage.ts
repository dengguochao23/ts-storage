const DEFAULT_KEY = '__storage__'
/*
 版本：1.0.0
 使用时需要实例化BetterStorage
 一开始你可选择是否传入key值，不传时就默认是__storage__
 */
class BetterStorage {
  key: string
  storage: any
  constructor(key?: string) {
    // 设置全局的key
    this.key = key ? key : DEFAULT_KEY
    this.storage = typeof window === 'undefined' ? null : window.localStorage
  }
  // 获取
  // 不传key值时，默认是__storage__
  get(key?: string): string {
    let _key = key ? key : this.key // 优先使用自己存入的key值
    return this.storage.getItem(_key)
  }
  // 设置
  // 实例时设置好了key值，这里可直接传入值即可
  set(key: string, val?: string): void {
    if (!key) throw new Error('你要输入内容')
    let _key = val?key: this.key
    let _val = val? val: key // 当输入值只有一个，就认为传入的是值
    _val = (typeof _val as any) === 'string' ? _val : serialize(_val)
    this.storage.setItem(_key, _val)
  }
  // 移除某项
  remove(key: string): void {
    let _key = key ? key : this.key // 优先使用自己存入的key值
    this.storage.removeItem(_key)
  }
  // 清除所有
  clear(): void {
    this.storage.clear()
  }
  // 获取所有
  getAll(): object {
    if (this.storage.length === 0) {
      return {}
    }
    let ret: any = {}
    Object.keys(this.storage).forEach((key:string) => {
      ret[key] = this.storage[key]
    })
    return ret
  }
}
// 变为string
function serialize(val: any): any {
  return JSON.stringify(val)
}
export default BetterStorage
