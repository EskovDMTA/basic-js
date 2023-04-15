const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    if (!Array.isArray(arr)) {
        throw Error("'arr' parameter must be an instance of the Array!")
    }
    let returnArray = [];
    for (let i = 0;i < arr.length ;i++){
        if (arr[i] === "--discard-next"){

            if(arr[i+2] === "--discard-prev" || "--double-prev" ){
                i+=1
            }
            i++
        }
        else if (arr[i] === "--discard-prev"){
            returnArray.pop();

        }
        else if (arr[i] === "--double-next"){
            if(i + 1 !== arr.length)
            returnArray.push(arr[i+1])
        }
        else if (arr[i] === "--double-prev"){
            if (i-1 >=0 ){
                returnArray.push(arr[i-1])
            }

        }else{

            returnArray.push(arr[i])
        };

    }
    return returnArray
}

module.exports = {
    transform
};
