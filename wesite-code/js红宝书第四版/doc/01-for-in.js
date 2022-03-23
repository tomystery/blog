/* var obj = {a:21,undefined:2,null:3}
for(const item in obj){
  console.log(item,obj[item])
}

for(const item of obj){
  console.log(item,obj[item])
} */


//=> 二：break
/* let num = 0;
for(let i=1;i<10;i++){
  debugger;
  if(i%5 == 0){
    
     break;
  }
  num++
}
console.log(num) */


//=> 3. 标签
/* let num = 0;
outermost:
for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    if(i==5 && j==5){
      break outermost;
    }
    num++
  }
}
console.log(num)//55如果把上面的标签去掉就是95 */


/* let num = 0;
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    debugger
    if(i==1 && j==1){
      break;
    }
    num++
  }
}
console.log(num) */

let num = 0;
  outermost:
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      if(i==5 && j==5){
        continue outermost;//跳出i为5，j也为5的循环
      }
      num++
    }
  }
  console.log(num)//55如果把上面的标签去掉就是95

/* 

  i   0  
  j   0 
  num 1
*/