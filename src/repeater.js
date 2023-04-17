const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
let optionsRepeater = {
    repeatTimes: 4, separator: '**',
    addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
}

function repeater(str, options) {

    let returnString = ""
    let separator = options.hasOwnProperty("separator") ? options["separator"] : ""
    let repeatSeparator = options.hasOwnProperty("additionRepeatTimes") ? options["additionRepeatTimes"] : 0
    let repeatString = options.hasOwnProperty("repeatTimes") ? options["repeatTimes"] : 0
    let addition = ""

    for (let i = 1; i <= repeatSeparator; i++) {
        if (i === repeatSeparator) {
            addition += options["addition"]
        } else {
            addition += options["addition"] + options["additionSeparator"]
        }
    }
    for (let y = 0; y < repeatString; y++) {
        if (y === repeatString-1 ) {
            returnString += str + addition
        }else{
            returnString += str + addition + separator
        }
            }
    console.log(returnString);

    console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS' === returnString)
    return returnString
};

repeater("STRING", optionsRepeater)

