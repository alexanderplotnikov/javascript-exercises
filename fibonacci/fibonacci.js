const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0){
        return 'OOPS';
    }
    let arr = [0, 1]
    let aIndex = 0;
    let bIndex = 1;
    let i = 0;
    while(arr.length - 1 != num){
        arr.push(arr[aIndex] + arr[bIndex]);
        aIndex++;
        bIndex++;
        i++;
    }
    arr.shift();
    return parseInt(arr.slice(-1));
}

module.exports = fibonacci
