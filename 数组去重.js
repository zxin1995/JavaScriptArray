// function removeRepeator(oldArr){
//     var newArr= [];
//     var tempJson= {};
//     for(var i =0;i<oldArr.length;i++){
//         if(!tempJson[oldArr[i]]){
//             newArr.push(oldArr[i]);
//             tempJson[oldArr[i]]="sth";
//         }
//     }
//     return newArr;
// }

function isHave(newarr,val){
    for(var i =0;i<newarr.length;i++){
        if(newarr[i]==val){
            return true;
        }
    }
    return false;
}

function removeRepeator2(oldArr){
    var newArr = [];
    for(var i=0 ;i<oldArr.length;i++){
        if(!isHave(newArr,oldArr[i])){
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}


var oldArr=[5,7,9,6,5,1,8,5,4,9]
var newArray=removeRepeator2(oldArr);
console.log(newArray)