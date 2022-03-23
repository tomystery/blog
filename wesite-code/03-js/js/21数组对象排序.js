 var arr = [ {name:'zopp',age:0}, {name:'gpp',age:18}, {name:'yjj',age:8}
];

/*function compare(property){ return function(a,b){ var value1 = a[property]; var value2 = b[property]; return value1 - value2; }
}
console.log(arr.sort(compare('age'))) */

let sortBy = (attr,rev) => {
  //第二个参数没有传递 默认升序排列
  if(rev ==  undefined){
      rev = 1;
  }else{
      rev = (rev) ? 1 : -1;
  }
  
  return function(a,b){
      a = a[attr];
      b = b[attr];
      if(a < b){
          return rev * -1;
      }
      if(a > b){
          return rev * 1;
      }
      return 0;
  }
}

newArray.sort(sortBy('number',false))


arr.sort((a,b) => a[])