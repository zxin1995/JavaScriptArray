function sum(arr) {
        var sum;
        var i;
         
         sum =0;	
        for(i=0;i<arr.length;i++){
            sum += arr[i];
        }
        console.log(sum);
         return sum;
}   

function sum(arr){
    var sum;
    sum = 0;
    arr.forEach(function(val,index,arr){
        console.log(val);
        sum +=val;
    });
    console.log(sum);
    return sum;
}

function sum (arr){
    return eval(arr.join("+"));
}

function sum(arr){
    var len ;
    len = arr.length;
    if( len == 0 ){
        return 0;
    }else if(len = 1){
        return arr[0];
    }else{
        return arr[0] + sum(arr.slice(1));
    }
}

/**
 * 函数式编程map-reduce:
 * 
 */


 function sum(arr){
     return arr.reduce(function(prev,curr,idx,arr){
         return prev +curr;
     });
 }


 /**
  * 常规循环

  */
  function sum(){
      var s =0;
      for(var i =arr.length-1;i>=0;i--){
          s+=arr[i];
      }
        return s;
  }
sum([2,2,9,4]);