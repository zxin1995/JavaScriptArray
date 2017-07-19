/**
 * 删除最后一项
 */

function truncate(arr){
    console.log(arr.slice(0,-1));
    return arr.slice(0,-1);
}



function truncate(arr){
    var newarr= [];
    [].push.apply(newarr,arr);
    newarr.pop();
    console.log(newarr);
    return newarr;

}

function truncate(arr){
    return arr.slice(0,arr.length-1);
}


function truncate(arr){
    var newarr= arr.join().split(",");
    newarr.pop();
    console.log(newarr);
    return newarr;
    //数据类型 变成了字符串;
}


function truncate(arr){
    var newarr= [];
    for(var i = 0 ; i<arr.length-1;i++){
        newarr.push(arr[i]);
    }
}


truncate([1234,3142,132412,1]);


