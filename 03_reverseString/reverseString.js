const reverseString = function(string) {
    let reverse = "";
    let stringLen = string.length;
    for (let i = 0; i < stringLen; i++) {
        reverse += string[(stringLen-1-i)];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
