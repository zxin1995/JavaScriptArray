/**
 * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 * @param {*} arr 
 * @param {*} item 
 */

function remove(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i]==item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}

function remove(arr,item){
    var newarr = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]!=item){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
    return newarr;
}


function remove( arr,item){
    return arr.filter(function(ele){
        return ele != item;  
    });
}


function remove(arr,item){
    var newarr = [];
    for(var i = 0; i<arr.length;i++){
        if(arr[i]==item){continue;}else{
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
    return newarr;
}

remove([1,2,34,23,12,1],1);
