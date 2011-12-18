require('datejs');
var milisInOneDay = 86400000;

module.exports.calculate = function(dateOne, dateTwo) {
  if (!dateOne || !dateTwo) return new Error('InvalidParams: Missing a date parameter');

  var dateOne = new Date.parse(dateOne);
  var dateTwo = new Date.parse(dateTwo);
  var duration = 0;

  duration = (this.dateOne > this.dateTwo)
    ? (dateOne - dateTwo) / milisInOneDay
    : (dateTwo - dateOne) /milisInOneDay;

  if(duration < 0 ) return duration * -1;
  
  return duration;
};
