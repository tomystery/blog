/* function foo(){
  try{
    return 0;
  }catch(err){

  }finally{
    console.log('a')
  }
}
console.log(foo()) */

function foo(){
  debugger
  try{
    return 0;
  }catch(err){

  }finally{
    return 1
  }
}
console.log(foo())