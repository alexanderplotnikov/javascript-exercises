const sumAll = function(num1, num2) {
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let total = 0;
    for(let i = num1; i < num2 + 1; i++){
        total += i;
    }
    return total;
}

module.exports = sumAll
