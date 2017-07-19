/**
 * 添加元素头部
 */

// concat
 function prepend(arr,item){
     var newarr= arr.concat([]);
     newarr.unshift(item); 
     console.log(newarr);
     return newarr;
 }

 function prepend(arr,item){
    console.log([item].concat(arr));
    console.log(arr);
    return [item].concat(arr);

 }

 function prepend(arr,item){
     var newarr = arr.slice(0);
     newarr.unshift(item);
     return newarr;
 }


 function prepend(arr,item){
     var newarr = [];
     for(var i = 0 ;i<arr.length;i++){
         newarr.push(arr[i]);
     }
     newarr.unshift(item);
     console.log(newarr);
     return newarr;
 }


 function prepend(arr,item){
    var newarr = arr.join().split(",");
    //  newarr.unshift(item);
    newarr.splice(0,0,item);
    console.log(newarr);
    return newarr;
 }


  function prepend(arr,item){

     var newarr = [item];
     
     [].push.apply(newarr,arr);
     
     console.log(newarr);
     
     return newarr;
 }

 prepend([1,23,4,412],10);