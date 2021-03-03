## 笔试题

1. 请简述自适应和响应式的区别
   - 自适应是是网页内容的宽度随着屏幕的宽度而发生变化，自适应是为了解决如何在不同大小的设备上呈现相同的网页，根据屏幕的宽度自动调整网页内容的大小
   - 响应式是自动识别屏幕的宽度，并作出相应调整的网页设计，布局和展示的内容可能会有所变动，一般会用到媒体查询等技术
2. 请简述浏览器的渲染过程(如何解析一个 html 文件)
   - 浏览器会将 html 解析成一个 DOM 树，DOM 树的构建是一个深度遍历的过程
   - html 构建 dom 树 -> 构建 render 树 -> 布局 render 树 -> 绘制 render 树
3. `==`和`===`的区别以及进行对比的过程
   [文章讲解](https://juejin.cn/post/6933225648261431310)
4. 列举前端数据存储的方式以及差异
   1. cookie
   2. sessionStorage,
   3. localStorage
   4. indexDB
5. 下面这段代码想要循环延时输出结果 01234,请问输出结果是否正确，如果不正确，请说明为什么，并修改循环内的代码使其输出正确结果(10 分)

```js
for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i + "");
  }, 100);
}
```

6. 完成一个函数，接受数组作为参数，数组元素包含整数或数组，函数返回扁平化后的数组`[1,[2,[3,4],5],6] => [1,2,3,4,,5,6]`

```js
//一：
function flatten = (arr) => {
    return arr.reduce((a,b) => a.concat(Array.isArray(b) ? a.concat(flatten(b)) : a.concat(b)))
}

//二：调用.toString方法
function  flat(arr){
      return arr.toString().split(',').map(item => item - 0)
  }
```

8. 下面的代码是否会报错？若不报错，输出什么？

```js
var y = 10;
if (!(x in window)) {
  var x = 10;
} else {
  ++y;
}
console.log(x); //undefined
console.log(y); //11
```
9. 深拷贝和浅拷贝的区别以及如何实现
`./03-深浅克隆.html`
  *  数组，对象 原型上的方法的区别以及不同
`06-原型上方法的不同.html`

10. 有三个请求R1,R2,R3,如果不用promise.all(),如何实现三个请求全部完成之后执行回到函数fn

## 面试题
1. 前端监控 前端的界面 -> 监控的网站  跨域用的是1像素的1X1的那个
2. 原型 原型链
3. 作用域 作用域链
4. react的无状态组件 props传入，自己不去定义
5. webpack常用的plugin插件有那些？
6. pureComponent 和 class Component的区别？
7. `Object.assign`的对象是可以改变的吗？
8. 回流和重绘
9. 判断怎么样是一个空对象  `Object.keys()`
  
10. js的加载 async和defer是什么意思
  * async 是异步请求，请求后按照script加载的顺序去执行
  * defer 是请求完成后谁先返回就先加载谁
  