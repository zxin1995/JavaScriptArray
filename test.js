// var numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers);



// var arr = [1,23,4];
// console.log(arr.join().split(","));

// var myHonda = { color: 'black', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// var newCar = myCar.slice(0, 2);

// console.log('myCar = ' + JSON.stringify(myCar));
// console.log('newCar = ' + JSON.stringify(newCar));


    // function list(){
    //     return [].slice.call(arguments);
    // }
    //     var list1=list(12,23,4);
    //     console.log(list1);



// var arr  = [1 ,2 ,3 ,4,5,12];
// var arr1 = arr.splice(2,3,"ti","huan");
// console.log(arr1);
// console.log(arr);
var arr  = [1 ,2 ,3 ,4,5,12];
var arr1 = arr.splice(2,0,1);
console.log(arr1);
console.log(arr);