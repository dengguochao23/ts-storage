# ts-better-storage

使用 TypeScript 来对原生的window.localstorage 进一步的封装，以便更好的使用

## Install

````
npm install ts-better-storage -D
````

## Usage
通过import方式来调用插件,实例化后方可使用

```javascript
import BetterStorage from "ts-better-storage";
const betterstorage = new BetterStorage() 
// or
const betterstorage = new BetterStorage('key')  // 实例时传入key，实现全局定义
```

获取缓存，get()

````javascript
const betterstorage = new BetterStorage() 
betterstorage.get('key')
// or 
const betterstorage = new BetterStorage('key') 
betterstorage.get()
````

设置缓存，set()
````javascript
const betterstorage = new BetterStorage() 
betterstorage.set('key','value')
// or 
const betterstorage = new BetterStorage('key') 
betterstorage.set('value')
````

移除某项， remove()
````javascript
const betterstorage = new BetterStorage() 
betterstorage.remove('key')
// or 
const betterstorage = new BetterStorage('key')
betterstorage.set('value')
````

清除所有， clear()
````javascript
const betterstorage = new BetterStorage() 
betterstorage.clear()
````

获取所有，getAll()
````javascript
const betterstorage = new BetterStorage() 
betterstorage.getAll()
````
