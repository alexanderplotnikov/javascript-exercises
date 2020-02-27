const removeFromArray = function(array) {
    for (let i = 0; i < arguments.length - 1; i++){
        if(array.indexOf(arguments[i+1]) > -1) {
            array.splice( array.indexOf(arguments[i + 1]), 1);
        }
    }    
    return array;
}

module.exports = removeFromArray
