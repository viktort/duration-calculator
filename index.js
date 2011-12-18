module.exports.calculate = function(dateOne, dateTwo) {
  if (!dateOne || !dateTwo) return new Error('InvalidParams: Missing a date parameter');
  this.dateOne = new Date(dateOne);
  this.dateTwo = new Date(dateTwo);
  var duration = 0;

  duration = (this.dateOne > this.dateTwo)
    ? (this.dateOne - this.dateTwo) / milisInOneDay
    : (this.dateTwo - this.dateOne) /milisInOneDay;

  return duration;
}();
