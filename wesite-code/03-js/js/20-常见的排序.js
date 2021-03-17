//交换排序
function swap(arr,left,right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    console.log(arr);
    return arr;

}
swap([2,3,4,5],0,3)


//冒泡排序，从小到大
function bubble(arr){
    for(var i=0;i< arr.length -1;i++){
        for(var j = i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] =  temp;

            }
        }
    }
    console.log(arr);

}
bubble([1,3,42,3,6,7,9])

//插入排序
function insert(){

}
insert([1,2,3,4,5])



//快排
