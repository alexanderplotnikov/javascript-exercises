const caesar = function(string, key) {
    processedString = string.split('');
    let res = "";
    for (let i = 0; i < processedString.length; i++){
        let code = processedString[i].charCodeAt(0);
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            if(code + key > 122 && (code >= 97 && code <= 122)){
                console.log("indise if loop >122")
                res += String.fromCharCode(65 + (key%25 - (90 - code) - 1));
            }            
            else if(code + key > 90 && (code >= 65 && code <= 90)){
                console.log("indise if loop > 90; letter: " + processedString[i])
                console.log("result: " + String.fromCharCode(65 + (key%25 - (90 - code) - 1)));
                res += String.fromCharCode(65 + (key%26 - (90 - code) - 1));
            }
            else{
                res += String.fromCharCode(code + key);
            }
            
            
        }
        else{
            res += String.fromCharCode(code);
        }
    }
    console.log(res);
    return res;
}

module.exports = caesar
