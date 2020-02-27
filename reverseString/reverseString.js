const reverseString = function(sentence) {
    let reversed = [];
    let j = 0;
    for(let i = sentence.length; i > -1; i-- ){
        reversed[j] = sentence[i];
        j++;
    }
    reversed = reversed.join('');
    return reversed;
}

module.exports = reverseString
