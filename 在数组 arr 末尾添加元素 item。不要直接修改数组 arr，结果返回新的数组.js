/**
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr 
 * @param {*} item 
 */
function appendarr(arr,item){
        var newarr= [];
        var len = arr.length;
        var  i;
        for( i =0 ;i<len;i++){
            newarr.push(arr[i]);
        }
        newarr.push(item);
        console.log(newarr);
        return newarr;
}

function appendarr(arr,item){
    console.log(arr.concat(item)) ;
    return arr.concat(item);
}

function appendarr(arr,item){
    var newarr= arr.slice(0);
    newarr.push(item);
    console.log(newarr);
    return newarr;
}
appendarr([123,1234,34,12341235],12);