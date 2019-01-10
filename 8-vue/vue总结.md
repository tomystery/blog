# 1. 基础

## 1. 1 细分几个生命周期


1. beforeCreate
2. created 
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed

页面一加载执行的是beforeCreate,created,beforeMount,mounted。

beforeUpdata是数据发生变化的时候发生的，updated是beforeUpdate之后虚拟dom重新渲染发生的。

beforeDestroy是销毁实例的
> * beforeDestroy以及destroyed没有测试
> * v2.5去哪的项目在不是主页面的时候发现一打开页面就是updated


## 1.2 模版语法

1. `v-once`:在标签上使用，只会执行一次
2. `<button v-bind:disabled="isButtonDisabled">Button</button>`,isButtonDisabled为否定意味如null false underfined的时候不会显示出来
3. 修饰符 `.prevent`,阻止默认的事件
4. 模版只能使用单个的表达式，流控制(if)和语句(var a=2)都是不会生效的。

## 1.3 计算属性和桢听器

 1. computed和方法的不同，computed会进行缓存。只要数据源是没有变化的。^ - ^ `Date.now()`也是不会变化的

2. 计算属性默认是只有getter，但在需要时也可以提供一个[setter](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter).
3. $emit向父组件向上触发事件
 
> 侦听器，看不下去

## 1.4 事件处理


`<router-view>`-显示的就是当前路由组件对应的页面
>* v-on:click.prevent.self 会阻止所有的点击，
>* 而 v-on:click.self.prevent 只会阻止对元素自身的点击。
>* 事件修饰符`.positive`看不懂

## 1.5 列表渲染

1. vue检测不了以下的变动：

>* 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
>* 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength

修改的数组的是没有问题的，亲测有效

2. 为了解决上面的问题就出现了下面的解决方法

```
//1.
Vue.set(vm.items, indexOfItem, newValue)

//2.
Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

3. 对于对像的解决：

	* 对象同样是不能直接添加的

	* 对象的添加最好这样
	```
	vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
	```
	* 这样添加也可
	```
	vm.$set(vm.userProfile, 'age', 27)
	```
	
	# 2. 深入了解组件
	
	## 2.1  组件注册
	
	在基础组件中全局导入基础组件的代码示例。使用`require.context`
	
	> * [基础组件的全局化组册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)不懂
	
	## 2.2  prop
	
	1. [禁用特性继承](https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8%E7%89%B9%E6%80%A7%E7%BB%A7%E6%89%BF)不懂，看不下去
	2. 