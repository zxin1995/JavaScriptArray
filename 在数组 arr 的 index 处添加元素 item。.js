/**
 * 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */


 function insert(arr, item, index) {

        console.log(arr.slice(0,index).concat(item,arr.slice(index)));
     
        return arr.slice(0,index).concat(item,arr.slice(index));

}

 function insert(arr, item, index) {

        var newArr = arr.concat();

        newArr.splice(index,0,item);

        console.log(newArr);

        return newArr;
        
}

function insert(arr,item,index){

    var newArr = [ ];
    
    [].push.apply(newArr,arr);
    
    newArr.splice(index,0,item);
    
    console.log(newArr);

    return newArr;

}

function insert(arr,item,index){
 var newArr = arr.slice(0);
 newArr.splice(index,0,item);
 return newArr;

}


function insert(arr,item,index){
    var newArr = [ ];
    for(var i = 0 ;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    newArr.splice(index,0,item);
    return newArr;
}

insert([1, 2, 3, 4], 'z', 3);
