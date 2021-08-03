const DEFAULT_KEY = '__storage__'
/*
 版本：1.0.4
 这是一个用ts来封装的window.localstorage API 接口；
 提供了get、set、remove、clear、getALL接口；
 @param: key  // 默认值为__storage__，可考虑是否传入；
 */
class BetterStorage {
  key: string
  readonly storage: any
  constructor(key?: string) {
    // 设置全局的key
    this.key = key ? key : DEFAULT_KEY
    this.storage = window.localStorage
  }
  /*
  获取
  @param: key 可选
  @return: 获取值
   */
  get(key?: string): string {
    let _key = key ? key : this.key // 优先使用自己存入的key值
    return this.storage.getItem(_key)
  }
  /*
  存入缓存
  @param: key 可选， set 设置的值，可选
  当存入两值时，第一个是key，第二个是值；
  当存入一值是，为存入的值，key值改为默认的key或者实例对象时存入的key
   */
  set(key: string, val?: string): void {
    if (!key) throw new Error('你要输入内容')
    let _key = val?key: this.key
    let _val = val? val: key // 当输入值只有一个，就认为传入的是值
    _val = (typeof _val as any) === 'string' ? _val : serialize(_val)
    this.storage.setItem(_key, _val)
  }
  /*
  移除缓存
  @param: key 可选
   */
  remove(key?: string): void {
    let _key = key ? key : this.key // 优先使用自己存入的key值
    this.storage.removeItem(_key)
  }
  // 清除所有
  clear(): void {
    this.storage.clear()
  }
  /*
  获取所有
  @return: 获取的对象集合
   */
  getAll(): object {
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
