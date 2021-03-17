/* 
function fn(){
    console.log('logger')
}
btn.onClick = throttle(fn,1000)
*/

function throttle(fn,time){
    let timer = null;
    return function(){
        if(timer) return;
        timer = setTimeout(function(){
            fn.apply(this);
            clearTimeout(timer);
            timer = null;
        },time)
    }
}