// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组


function curtail(arr){

    var a = arr.slice(0);

    a.shift();

    console.log(a);
    
    return a;

}

function curtail(arr){

    console.log(arr.slice(1));
    
    console.log(arr);

}

function curtail(arr){
    
    console.log(arr.filter(function(val,index,arr){
        return index!==0;
    })) ;
    
    return  arr.filter(function(val,index,arr){
        return index!==0;
    })

}


function curtail(arr){
    var newarr= [];
    [].push.apply(newarr,arr);
    newarr.shift();
    console.log(newarr);
    return newarr;
}


function curtail(arr){

    var newarr = arr.join().split(",");
    
    newarr.shift();
    
    return newarr;
}

function curtail(arr){
    var newArr= arr.concat();
    newArr.shift();
    console.log(newArr);
    return newArr;    
}

function curtail(arr){
    var newarr = [];
    for(var i = 1;i<arr.length;i++){
        newarr.push(arr[i]);
        
    }
    console.log(newarr);
    return newarr;
}

curtail([1,1243,12341,1241]);