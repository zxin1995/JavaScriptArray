/**
 * 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr1 
 * @param {*} arr2 
 */
function concat(arr1,arr2){
        console.log(arr1.concat(arr2));
        return arr1.concat(arr2);

}

function concat(arr1,arr2){
    var newArr = arr1.slice(0);

    [].push.apply(newArr,arr2);

    console.log(newArr);
    
    return newArr;
}

function concat(arr1,arr2){
    var newArr = arr1.slice(0);

    for(var i =0 ;i<arr2.length;i++){

        newArr.push(arr2[i]);
    
    }
    
    console.log(newArr);

    return newArr;

}

function concat(arr1,arr2){
    
    var newArr = [];

    for(var i = 0 ; i<arr1.length;i++){
    
        newArr.push(arr1[i]);
    
    }

    for(var j = 0 ; j<arr2.length;j++){
    
        newArr.push(arr2[j]);
    
    }
    console.log(newArr);
}

concat([132,123],[1,1,2]);