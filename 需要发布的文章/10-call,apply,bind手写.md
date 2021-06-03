# 1. call

## 1.1 call 的手写

1. call 和 apply 的区别在于传递的第二个参数，call 是一个一个的传入，而 apply 是是传递一个数组

   ```js
   Function.prototype.myCall = function (context, ...args) {
     //this 是下面的fn 最后要执行的函数
     //obj 是要指向的对象

     //如果是null/undefined 那么context执行的是window
     if (context === null || context === undefined) {
       context === window;
     } else {
       if (["number", "boolean", "string"].includes(typeof context)) {
         if (typeof context === "number") {
           context = new Number(context);
         } else if (typeof context === "boolean") {
           context = new Boolean(context);
         } else if (typeof context === "string") {
           context = new String(context);
         }
       }
     }
     context.$fn = this;
     const result = context.$fn(...args); //利用了【谁.】那么点的那个就是对象
     delete context.$fn;
     return result;
   };

   function fn(x, y) {
     console.log(this, x, y);
   }
   let obj = 1;
   fn.myCall(obj, 1, 2, 3);
   ```

# 2. apply

## 2.1 apply 手写

- 和`call`是一样的，只不过传递的第二个参数略有不同
  ```js
  Function.prototype.myApply = function (context, args) {
    if (context === null || context === undefined) {
      context === window;
    } else {
      let type = typeof context;
     if(type !== "object" && type !== 'function' && type !== 'symbol'){
       //=> 基本类型值
       switch (type){
         case 'number':
          context = new Number(context);
          break;
        case 'string':
          context = new String(context);
          break;
        case 'boolean':
          context = new Boolean(context);
          break;
       }
     }
    }
    context.$fn = this;
    const result = context.$fn(...args); //利用了【谁.】那么点的那个就是对象
    delete context.$fn;
    return result;
  };
  ```

# 3. bind

## 3.1 bind 手写
* bind的重点在于是返回一个函数的，因为它不是立即执行
    ```js
    Function.prototype.myBind = function (context) {
        if (context === null || context === undefined) {
            context = window;
        }
        const argsA = [].slice.call(arguments, 1);
        _this = this;
        return function (...args) {
            const argsB = [].slice.call(arguments, 0);
            _this.apply(context, argsA.concat(argsB));
        };
    };
    ```
