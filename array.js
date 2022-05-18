var number = [500,11,22,100,200];
var result = number[0];
for(var i = 0; i<number.length;i++){
    var element = number[i];
    if(result < element){
        result = element;
    }
}
console.log(result);
