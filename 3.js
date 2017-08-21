/**
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 */


 function square(arr){
     var a = arr.slice();
     console.log(a);
     a = a.map(function(val){
         return val * val ;
     })
    console.log(a); 
 }

function square(arr){
    var result = [ ];
    for(var i = 0 ; i < arr.length;i++){
        result [ i ] = arr[ i ] * arr [ i ];
    }

    return  result;
}


function square(arr){
    var  a = [ ];
    for(var i = 0 ;i<arr.length;i++){
        a.push(Math.pow(arr[i],2));
    }
    return a ;
}

 square([1, 2, 3, 4]);