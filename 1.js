

function count(arr, item) {
    
    var count = [];

    var pos = arr.indexOf(item);

    while(pos > -1){

            count.push(pos);

        pos= arr.indexOf(item, pos+1);

    }

    return count.length

}

    function count(arr, item){
        var reg = new RegExp(""+item+"","g");
        var arrStr = arr.join("");
        var arrNum = arrStr.match(reg);
        return arrNum.length;
    }

