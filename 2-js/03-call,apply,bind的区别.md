# call,apply,bind的区别

详细的可以参见《javascript高级程序设计三版》116页

 三者共同点都是改变this对象的，不同点分别见下面。

 1. apply传入的参数的区别，第一个参数都是相同的，但是apply传递的第二个参数是数组或者arguments对象。

 ```
 function sum(num1, num2){
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments);
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);
}
alert(callSum1(10,10));   //20
alert(callSum2(10,10));   //20

 ```

 2. 下面是call的方式,传递的参数必须要一一列举出来

```
function sum(num1, num2){
    return num1 + num2;
}
function callSum(num1, num2){
    return sum.call(this, num1, num2);
}
alert(callSum(10,10));   //20

```

3. call和apply真正强大的地方是能够扩充函数赖以运行的作用域

```
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(window);
sayColor.call(o);//blue

```

不用call或者apply是这样改变的

```
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
sayColor();     //"red"
o.sayColor = sayColor;
o.sayColor();   //"blue"
```

>使用call,apply来扩充作用域的最大好处是对象不需要与方法有任何耦合关系，上面的第二个例子，我们是先将sayColor（）函数放到对象o中，然后通过o来调用它。

4. bind(),绑定了传入的对象但是并没有执行

```
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();    //blue

```

>在这里，sayColo()调用bind()并传入对象o,创建了objectSayColor()函数。objectSayColor()函数的this值等于o,因此即使是在全局作用域中调用这个函数，也会看到"blue".