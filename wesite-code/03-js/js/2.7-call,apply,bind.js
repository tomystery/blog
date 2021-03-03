//call 柯里化 就是函数执行返回一个小函数
(function(){
    Function.prototype.call = function(...params){
        return function(){
            console.log("params:",params);
            let other = params.slice(1);
            console.log(other);
        }
    }
})()

