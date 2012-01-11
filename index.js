require('datejs');
var milisInOneDay = 86400000;

var _error = function() {
  return new Error('InvalidParams: Missing a date parameter');
}

var _calculate = function(dateOne, dateTwo) {
  if(!dateOne || !dateTwo) return false;

  dateOne = new Date.parse(dateOne);
  dateTwo = new Date.parse(dateTwo);

  var duration = (this.dateOne > this.dateTwo)
    ? (dateOne - dateTwo) / milisInOneDay
    : (dateTwo - dateOne) / milisInOneDay;

  return Math.abs(duration);
};

module.exports.calculate = function(dateOne, dateTwo) {
  var d;
  return (d = _calculate(dateOne, dateTwo)) ? d : _error();
};

module.exports.calculateWholeDays = function(dateOne, dateTwo) {
  var d;
  return (d = _calculate(dateOne, dateTwo)) ? Math.floor(d) : _error();
}

module.exports.calculatePartialDays = function(dateOne, dateTwo) {
  var d;
  return (d = _calculate(dateOne, dateTwo)) ? Math.ceil(d) : _error();
};