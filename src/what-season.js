const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  let monthNumber = date.getMonth();
  if(monthNumber >= 0 && monthNumber <=1 || monthNumber === 11) return "winter";
  if(monthNumber >= 2 && monthNumber <=4) return "spring";
  if(monthNumber >= 5 && monthNumber <=7) return "summer";
  if(monthNumber >= 8 && monthNumber <=10) return "autumn";

}

module.exports = {
  getSeason
};
