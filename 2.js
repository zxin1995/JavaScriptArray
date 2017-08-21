/**
 * 找出数组 arr 中重复出现过的元素
 */


function duplicates(arr){
    var a = [ ];
    var b = [ ];
    for(var i =  0 ; i<arr.length;i++){
        if(!b[arr[i]]){
            b[arr[i]] = 1;
            continue;
        }
        b[arr[i]]++;
    }
    for(var i = 0 ; i<b.length;i++){
        if(b[i]>1){
            a.push(i);
        }
    }
    return a ;
}

function duplicates(arr){
    var a = [ ];
    for(var i =0 ;i<arr.length-1;i++){
        for(var j = i +1 ;j<arr.length;j++){
            arr[i] == arr[j] && a.indexOf(arr[i]) ==  -1 &&a.push(arr[i]); 
        }
    }   
        console.log(a);
        return a ;

}


 duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])