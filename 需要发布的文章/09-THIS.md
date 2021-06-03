# THIS指向的判断有5种
1. 给元素的某个事件绑定方法,方法执行，THIS一般指向的是当前元素
    ```js
    //DOM0
    btn.onclick(function(){
        console.log(this)
    })

    //DOM2 
    btn.addEventListener('click',function(){
        console.log(this)//=> 元素
    })

    //IE
    btn.attachEvent('onclick',function(){
        console.log(this);//=> window
    })
    ```
2. 普通函数执行
    如果前面有'点'，'点'前面是谁THIS就指向谁。没有则指向WINDOW(严格模式下是undefined)
    ```js
    function fn(){
        console.log(this)
    }
    let obj = {
        name:'obj',
        fn:fn
    }

    fn();
    obj.fn();
    console.log(obj.hasOwnProperty('name'));//=>hasOwnProperty用来检测某个属性名是否属于当前对象
    console.log(obj.__proto__.hasOwnProperty('name'));//=>FALSE this:obj.__proto__ === Object.prototype
    console.log(Object.prototype.hasOwnProperty.call(obj,'name'));//obj.hasOwnProperty('name')
    ```
3. 构造函数执行
    构造函数执行，函数中的THIS指向的是当前类的实例
    ```js
    function fn(){
        console.log(this)
    }
    let f = new Fn;
    ```
    
4. 箭头函数执行
    * 箭头函数中没有THIS，所用到的THIS都是其上下文中的THIS
    * 箭头函数没有的东西很多
        * 没有prototype(构造器),所以不能被new执行
        * 没有arguments实参集合(可以基于...args剩余运算符获取)
    ```js
     let obj = {
        name:'OBJ',
        fn:() => {
        //=> this:window 这里注意箭头函数的THIS用的是上下文的，函数才有上下文，因此指向的是全局的上下文
        console.log(this);

            return function(){
                console.log(this);//=> window
            }
        }
    }
    let ff = obj.fn();
    ff();
    ```
5. 基于call/apply/bind可以修改THIS指向
    * CALL/APPLY
        * 第一个参数就是改变THIS指向，写谁就是谁(特殊：非严格模式下，传递null/undefined指向的也是window)
        * 唯一的区别：传递的参数方式有区别，call是一个一个传递，apply是需要把传递的参数放到数组中整体传递
        ```js
        func.call([context],10,20)
        func.apply([context],[10,20])
        ```