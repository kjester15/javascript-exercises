const removeFromArray = function(array, removeElement) {
    for (let i = 0; i < arguments.length-1; i++) {
        if (array.includes(arguments[i+1])) {
            let index = array.indexOf(arguments[i+1]);
            array.splice(index, 1);
        }
        else {
            continue;
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
