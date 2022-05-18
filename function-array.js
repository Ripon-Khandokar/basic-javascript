// function getLargeNumber (largeNumber){
//     let number = largeNumber[0];
//     for(var i = 0; i<largeNumber.length ;i++){
//     var element = largeNumber[i];
//     if(element > number){
//        number = element;

//     }
// }
// return number;

// }
// let largeNumber = [22,44,44,55,66,77,33,22,11,23,44,543,00];
// let result = getLargeNumber(largeNumber);
// console.log('get Large nUmber',result);


// function addNumber(number1 , number2){
//     result = number1+number2;
//     return result;
// }
//  var  first = addNumber(22,33);
// console.log(first);

// console.log('o amar deser mati tomar porei thekai matha tmi mor jiboner vabona hridoyer sukher dola')
// var second = addNumber(11,22);
// console.log('nijeke ami bulte pari tmake jabe na vula')
// console.log(second);


function getLargeNUmber(number){
var result = number[0];
for(var i = 0; i<number.length;i++){
    var element = number[i];
    if(result < element){
        result = element;
    }
}
return result;
}
var number = [11,44,55,33,22,244,66,99,00,77,66,0];
var first =  getLargeNUmber(number);
console.log(first);
 
var second = [44,50,100];
var ripon = getLargeNUmber(second);
console.log(ripon);

