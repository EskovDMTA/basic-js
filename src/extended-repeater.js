const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {

  let returnString = ""
  let separator = options.hasOwnProperty("separator") ? options["separator"] : "+"
  let repeatSeparator = options.hasOwnProperty("additionRepeatTimes") ? options["additionRepeatTimes"] : 0
  let repeatString = options.hasOwnProperty("repeatTimes") ? options["repeatTimes"] : 0
  let addition = ""



  for (let i = 1; i <= repeatSeparator; i++) {
    if (i === repeatSeparator || repeatSeparator === 0) {
      addition += options["addition"]
    }else {
      addition += options["addition"] + options["additionSeparator"]
    }
  };

  if (repeatString === 0){
    returnString += str + addition
    return returnString
  }

  for (let y = 1; y <= repeatString; y++) {
    if (y === repeatString) {
      returnString += str + addition
    }else{
      returnString += str + addition + separator
    }
  }

  return returnString
};


module.exports = {
  repeater
};
