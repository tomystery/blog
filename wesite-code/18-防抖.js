/* 

function logger (){
    console.log('logger')
}
btn.onclick = debounce(logger,1000)
*/
function debounce(func,wait,immediate){
    let timeout;
    return function(){
        clearTimeout(timeout);
        if(immediate){
            let callNow = !timeout;
            if(callNow) func.apply(this,arguments);
        }
        timeout = setTimeout(() => {
            func.apply(this,arguments);
            timeout = null;
        },wait);
    }
}
function logger(){
    console.log('logger');
}
btn.addEventListener('click',debounce(logger,1000,true))