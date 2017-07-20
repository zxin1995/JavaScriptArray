
/**
 * @param {*统计数组 arr 中值等于 item 的元素出现的次数} 
 * @param {*} arr 
 * @param {*} item 
 */
function count(arr,item){
    var count = 0 ;
    arr.foreach(function(val){
        if(val == item){
            count++ ;
        }
    });

    return count;  

}

function count (arr,item){
    return  arr.filter(function(val){
        return (val  === item);
    }).length;

}


function count (arr,item){

    var count = arr.filter(function(val){
    
        return val === item;
    
    });

    return count.length;
}


function count (arr,item){
    var count = 0 ; 
    arr.map(function(val){
        if(val === item){
            count++;
        }
    
    });

    return count;

}

function count (arr,item){
    var count = 0 ; 
    for(var  i = 0; i<arr.length;i++){
        if(arr[i] === item){
            count ++;
        }
    }
    return count;
}


function count (arr,item){
    var count = arr.reduce(function(prev,curr){

        return curr === item ? prev +1 : prev;
    
        
    },0);

    return count;

}

function count (arr,item){
    var count = 0 ;
    arr.forEach(function(val){
        val === item ? count ++ : 0 ;
    });
    console.log(count);
    return count ;
}

count([1, 2, 4, 4, 4, 4, 3], 4);