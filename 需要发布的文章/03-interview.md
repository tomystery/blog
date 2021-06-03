# 前端面试题相关
## 1. css + html
### 1.1 rem，em,vm的区别?(字节)
1. rem :相对的是网页的根元素，默认1rem = 16px
2. em:相对的是父元素
3. vm: 整个浏览器视口的高度是100vm,比如浏览器适口 高度900px,那么1vm = 900/100 = 9px
### 1.2 style内嵌样式，link和@import导入样式的区别？
1. `style`是正常解析，解析完再继续解析DOM
2. `link`是浏览器会开辟一个线程去服务器获取相应的资源文件(不会阻碍主线程的渲染)
3. `@import`导入样式，此时不会开辟新的线程去加载资源文件，而是让主线程去获取，这样阻碍了DOM结构的继续渲染；只有等把外部样式都导入进来并且解析后才会继续渲染DOM结构。
### 1.3 浏览器端渲染机制和原理
* 解析HTML，生成DOM树，解析css，生成CSSOM树
* DOM树和CSSOM树结合，生成渲染树（render Tree）
* Layout(回流)：根据生成的渲染树，计算他们设备适口(viewport)内的确切位置和大小，这个计算的阶段就是回流
* Painting(重绘)：根据渲染树以及回流得到的信息，得到节点的绝对像素
* Display:将像素发送到GPU，展示在页面上
* 浏览器通知GPU(显卡)开始按照render tree绘制图形到页面中
### 1.4 DOM的重绘和回流 Repaint & Reflow
* 重绘：元素样式的改变（但宽高、大小、位置等不变）
  如 outline,visibility,color,background-color等
* 回流：元素的大小或者位置发生了变化(当页面布局和几何信息发生变化的时候)，触发了重新布局，导致渲染树重新计算布局和渲染
如添加或删除可见的DOM元素；元素的位置发生变化；元素的尺寸发生变化；内容发生变化(比如文本变化或图片被另一个不同尺寸的图片所替代)；页面一开始渲染的时候（这个无法避免）；因为回流是根据视口的大小来计算元素的位置和大小的，所以浏览器的窗口变化也会引发回流...
> 注意：回流一定会触发重绘，而重绘不一定会回流
### 1.5 BFC
BFC(Block Format Context):块级格式化上下文。意思就是说BFC中的元素外面的其他元素是区分开的，外面元素的改变不会影响内部的元素。
* 触发条件
  1. 根元素
  2. float
  3. position:absolute或fixed
  4. display:inline-block 或table
* 应用场景：
  1. 防止margin重叠
  2. 不和浮动元素重叠
  3. 清除元素内部浮动

### 1.6 doctype作用，严格模式和混合模式的区别
`<!doctype>`声明位于文档的最前面，在html之前显示。用于告诉浏览器的解析器用什么文档类型规范来解析文档。
* 严格模式默认用浏览器支持的最高版本解析
* 混杂模式以宽松的向后兼容的方式解析，模拟老的浏览器行为以防止站点无法工作
* 怪异模式：怪异模式则是使用`浏览器自己`的方式来解析执行代码

* doctype不存在或格式不正确时会让文档以混杂模式呈现。

### 1.7 水平垂直居中
#### 1.7.1. 父元素宽高未知的情况下
1. flex布局 
  ```css
  display: flex;
  justify-content: center;
  align-items: center;

  ```
2. 父元素relative,子元素absolute
  ```css
    top:50%;
    left:50%;
    transform:translateY(-50%) translateX(-50%);
  ``` 
#### 1.7.2 知道父元素宽高的情况下
1. 父元素display:relative,子元素absolute,
```css
top:50%;
left:50%;
margin-left:- 子元素一半的宽;
margin-top:- 子元素一半的高度
```
2. 父元素是块级，子元素是行内元素
```css
  /* 父 */
  height: 500px;
  text-align: center;
  line-height: 500px;

  /* 子 */
  width:100px;
  height: 100px;
  display: inline-block;
```


## 2. js
### 2.1 什么是作用域链(字节)
1. `作用域`：指的是上下文(上下文中既能存放变量，还能执行代码，怎么执行是放到栈里面执行的)中存放变量的地方。
2. `作用域链`：
    * 
        作用域链的作用是保证执行环境有权访问变量和函数。通过作用域链可以访问到外层环境中的变量和函数。全局执行上下文中的变量对象(也就是全局对象)始终是作用域链的最后一个对象。

        当我们查找一个变量时，如果当前执行环境中没有找到，我们可以沿着作用域链向后查找。
    * `官方解释：`上下文的代码在执行的时候，会创建变量对象的一个作用域链。

    * `通俗解释：`不带var的不是私有变量，会向他的上级作用域中查找，看是否为上级的变量，不是继续查找，一直找到window为止(我们把这种查找机制叫做"作用域链"),也就是我们在私有作用域中操作的这个非私有变量，是一直操作别人的。
3. 执行上下文：变量或函数的上下文决定了他们可以访问那些数据，以及他们的行为。每一个上下文都有一个关联的`变量对象`.而这个上下文中定义的所有变量和函数都存在于这个对象上。
### 2.2 网页中js的解析
* 【默认script src='xxx'】
这时候主程序去请求js文件，并把js文件解析加载后再去渲染DOM结构。现代的浏览器都有完善的代码扫描机制：如果遇到script需要同步加载和渲染代码，浏览器在渲染js的时候，同时会向下继续扫描，如果发现有一些异步的资源代码，此时就开始加载请求了。
* 如果设置了defer或者async
    都是让其变为异步获取资源(不会阻碍DOM的渲染)
    * defer可以遵循原有的加载顺序，获取后按照顺序去一次渲染JS
    * async无序的(谁先获取到谁先执行)
* 因为在js中还有可能操作元素的样式，所以哪怕都是异步请求资源的情况下，js先加载回来了，也要等到它之前发送的css加载并渲染完成后才会执行JS代码

### 2.3 防抖和节流
1. 节流：是一段时间内只执行一次
2. 防抖：是事件没有再触发的时间段内才调用一次

* 例如：页面一直滚动，我让页面在2s内只执行一次就是节流。页面停止滚动后的2s内没有再滚动，执行一次事件就是防抖。
```js
//节流
//防抖
```
### 2.4 跨域的解决方案

### 2.5 target和currentTarget区别？
  ```js

  <p id="ha">
        hahaha
        <span>我是一个小客气</span>
  </p>


  var Ha = document.getElementById('ha');
  Ha.onclick = function(ev){
      console.log(ev.target,ev.currentTarget);
  }
  ```
  点击span元素，会发现target是真正的目标，currentTarget是事件处理程序注册的元素
### 2.6 深浅拷贝
### 2.7 手写call/apply/bind
1. 区别：
  * 都是改变this的指向，不同的是call/apply是立即执行的，bind会改变指向，但是不会立即执行
  * call传入参数是一个一个传入，而apply第二个参数传入的是数组

### 2.8 使用 Object.defineProperty() 来进行数据劫持有什么缺点?
`Object.defineProperty()`方法会直接在一个对象上定义一个新属性或者修改现有属性，并返回此对象。
1. 对象目前存在的属性描述符有两种主要形式：数据描述符和属性描述符
2. 上面两种形式不能同时存在
3. 数据描述符可设置的属性有value(设置属性值),writable(设置值是否可以重写),enumerable(设置的值是否可以枚举到通过for in或者Object.keys),configurable(对象的属性能否被删除，以及除`value`和`writable`之外的其他特性是否可以被修改)
4. 存储描述符可设置的属性有configurable,enumerable,set,get
缺点：
有一些对属性的操作，使用这种方法无法拦截，比如说通过下标方式修改数组数据或者给对象新增属性，vue 内部通过重写函数解决了这个问题。在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为这是 ES6 的语法.
## 3. 性能优化
### 3.1 避免DOM的回流
[掘金上更详细的帖子](https://juejin.cn/post/6844904114841714696#heading-7)
* 放弃传统操作DOM 的时代，基于vue/react开始数据影响视图模式
  mvvm/mvc/virtual dom /dom diff...
* 分离读写操作（现代的浏览器都有渲染队列的机制）
  offsetTop、offsetLeft,offsetWidth,offsetHeight,clientTop,clientLeft,clientWidth,clientHeight,scrollTop,scrollLeft,scrollWidth,scrollHeight,getComputedStyle,currentStyle...会刷新渲染队列
* 样式集中改变
  div.style.cssText = 'width:20px;height:20px'
  div.className = 'box';
* 缓存布局信息：

```js
div.style.left = div.offsetLeft + 1 + 'px';
div.style.top = div.offsetTop + 1 + 'px';
```
=> 改为
```js
var curLeft = div.offsetLeft;
var curTop = div.offsetTop;
div.style.left = curLeft + 1 + 'px';
div.style.top = curTop + 1 + 'px';
```
* 元素批量修改
 文档碎片：createDocumentFragment
 模版字符串拼接
* 动画效果应用到position属性为absolute或fixed的元素上(脱离文档流)
* css3硬件加速(GPU加速)
  比起考虑如何减少回流重绘，我们更期望的是，根本不要回流重绘；transform\opacity\filters...这些属性会触发硬件加速，不会引发回流和重绘。。。

  可能会引发的坑：过多使用会占用大量内存，性能消耗严重、有时候会导致字体模糊等
* 牺牲平滑度换取速度
  每次1像素移动一个动画，但是如果此动画使用了100%的CPU，动画看上去是跳动的，因为浏览器正在与更新回流做斗争。每次移动3像素可能看起来平滑度低了，但它不会导致CPU在较慢的机器中抖动。
* 避免table布局和使用css的javascript表达式

## 4. react
### 4.1 react生命周期以及为什么有几个生命周期废了
1. react生命周期：
    * componentDidMount
    * componentWillUpdate
    * componentDidUpdate
    * componentWillDestroy
2. 为什么有几个生命周期废了？

## 5. 网络
### 5.1 DNS域名解析

我们系统默认优先从host文件读取IP地址，这样比较直接。如果没有则访问本地DNS服务器，如果本地DNS服务器也没有，那么就一层一层的往上找，直到找到根服务器。

**详解：**
1. 找的话是先找本地的host文件，如果没有记录的话，则向本地DNS服务器(地址是8.8.8.8/114.114.114.114)查找。
2. 如果上面都没找到的话，那么查看本地DNS服务器的设置，里面有个是否设置转发，如果设有转发模式则会一层一层的往上找，直到找到根服务器。如果没有设置转发，那么直接找到13台根DNS服务器。


这就像是，我打电话找雪萍，先看看我脑子里面记住了电话号码没(host) -> 通讯录(本地DNS服务器) -> 最近运营网店(转发DNS服务器) -> 市运营网点 -> 省运营网点 -> 运营总公司(根DNS服务器)

### 5.2 输入URL到页面展示的一个过程？
1. 从浏览器中输入url，首先会从本地的host文件中查找有没有对应IP地址，如果没有的话则一层层的往上查找直到找到根DNS服务器。

2. 找到IP地址后开始经过http的三次握手从服务器上下载所需要的资源文件。首先会加载html文件，然后主线程开始从上到下解析，遇到link的css文件则会开辟一个线程异步加载css，遇到script的js文件则会停止渲染dom，让主线程去解析加载js,解析完成后继续DOM的渲染。接下来就是`1.3`的内容。浏览器的渲染机制。
### 5.3 Http三次握手和四次挥手过程
### 5.3.1 三次握手
![](https://user-images.githubusercontent.com/6896562/41697418-3ef2c7f2-754b-11e8-9d26-c56519a8f663.png)

为什么是三次？因为三次是服务器和客户端直到对方发送和接收能力都没有问题的最小次数

1. S -> C :S发给C，那么C知道了S的发送能力是没有问题的
2. C -> S :那么S知道C的发送和接收能力没问题的，此时还不知道s的接收能力只能从第一次知道s的发送能力。
3. S-> C :那么C知道S的接收和发送能里没问题。
### 5.3.2 四次挥手

## 6. vue
### 6.1 Vue如何检测数组变化
vue首先会改写数组原型上的pop,slice,push,split,shift,unshift方法，然后判断里面的增加或者修改的值是否是对象，如果是对象的话进行监控。监控的时候使用Object.defineProperty进行劫持
### 6.2 请说下响应式数据的理解？
* 核心点考察的式：数组和对象类型当值变化的时候如何劫持到。对象内部通过defineReactive方法，使用Object.defineProperty将属性劫持(只会劫持已经存在的属性)，数组则是通过重写数组方法实现。这里在回答时可以带出一些相关知识点(比如多层对象是通过递归来实现劫持，顺带提出Vue3中使用proxy来实现响应式数据)

* 核心点答出来也可以进行补充回答，内部依赖收集是怎么做到的，每个属性都拥有自己的dep属性，存放他所依赖的watcher,当属性变化后会通知自己对应的watcher去更新(其实后面会粳稻每个对象类型自己本身也拥有一个dep属性，这个在$set面试题中进行讲解)

* 这里可以引出性能优化的内容(1)对象层级过深，性能就会差 (2) 不需要响应数据的内容不要放到data中 (3)Object.freeze()可以冻结数据
