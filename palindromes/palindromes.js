const palindromes = function(a) {
    a = a.replace(/[^A-Za-z]/g, "").toLowerCase();
    a = a.split("");
    let b = [...a.reverse()];
    a = a.reverse();
    a = a.join('');
    b = b.join('');
    if(a == b){
        return true;
    }
    else{
        return false;
    }
}

module.exports = palindromes
