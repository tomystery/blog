function _instanceof(left,right){
    //right是 类
    //left是实栗 原理从原型链上 找到他们相等
    let prototype = right.prototype;
    let left = left.__proto__;
    while(true){
        console.log('left');
        if(left === prototype){
            return true;
        }
        left = left.__proto__;
    }
}

function a(){
    console.log('a');
}

let b = new a();
console.log(_instanceof(b,a));