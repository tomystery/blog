```js
// var proxy = new Proxy(target,handler);

//1. handler没有设置任何拦截，那就等同于直接通向原对象
var target = {};
var handler = {};
var proxy = new Proxy(target,handler);
proxy.a = 'b';
console.log(target.a)  //'b'

```