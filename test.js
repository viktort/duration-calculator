var test = require('utest');
var calculator = require('./'); //as logic is in index.js
var assert = require('assert');

test('calculator', {
	'A duration is returned as expected' : function() {
		assert.equal(calculator.calculate('12-12-2011', '15-12-2011'), 3);
	},

  'Determine that this works with overlapping years' : function() {
    assert.equal(calculator.calculate('25-12-2011', '1-1-2012'), 7)
  },

  'Ensure that the date order is irrelevant' : function() {
    assert.equal(calculator.calculate('1-1-2012', '25-12-2011'), 7)
  },

  'Ensure that different date formats are supported' : function() {
    assert.equal(calculator.calculate('12/12/2011', '14/12/2011'), 2)
  },

  'Ensure that different date formats are supported' : function() {
    assert.equal(calculator.calculate('12 Dec 2011', '14 Dec 2011'), 2)
  },

  'Ensure that different date formats are supported' : function() {
    assert.equal(calculator.calculate('13/11/2011', '14 Dec 2011'), 31)
  },

  'Ensure error is thrown when one of the dates is not supplied' : function() {
    var err = calculator.calculate('12/12/2011');
    assert.ok(/InvalidParams: Missing a date parameter/.test(err.message));
  },

  'Check dates + times are supported': function() {
    assert.equal(calculator.calculate('2012-01-01 12:00', '2012-01-02 12:00'), 1);
  },

  'Check calculate returns an exact difference': function() {
    assert.equal(calculator.calculate('2012-01-01 12:00', '2012-01-02 13:00'), (25/24));
  },

  'Check calculateWholeDays returns a whole number with excess hours ignored': function() {
    assert.equal(calculator.calculateWholeDays('2012-01-01 12:00', '2012-01-03 13:00'), 2);
  },

  'Check calculatePartialDays returns a whole number with excess hours counting as a whole day': function() {
    assert.equal(calculator.calculatePartialDays('2012-01-01 12:00', '2012-01-03 13:00'), 3);
  },

  'Check datetimes crossing a DST boundary one way are supported': function() {
    // we don't know when DST will be on the syste locale, try to guess
    var d = new Date(2012, 0, 1);
    d.setHours(12);
    var offset = d.getTimezoneOffset();
    var dstCrossovers = [];
    while(d.getFullYear() == 2012) {
      d.add({days:1});
      if(d.getTimezoneOffset() != offset) {
        offset = d.getTimezoneOffset();
        dstCrossovers.push({
          offset: offset,
          date: d.toUTCString()
        });
      }
    }
    if(dstCrossovers.length) {
      var lastOffset = 0;
      dstCrossovers.forEach(function(crossover) {
        var hourOffset = crossover.offset/60;
        crossover.hourOffset = lastOffset - hourOffset;
        lastOffset = hourOffset;

        var before = new Date(crossover.date).add({days: -1});
        before.setHours(12);

        var after = new Date(crossover.date).add({days: 1});
        after.setHours(12 + crossover.hourOffset);

        assert.equal(
            calculator.calculate(
                before.toString('yyyy-MM-dd HH:mm'), 
                after.toString('yyyy-MM-dd HH:mm')
            ), 2
        );
      });
    } else {
      // nothing to test locale doesn't have DST
    }
  },

  'Check date object support': function() {
    var a = new Date(2012, 02, 02);
    var b = new Date(2012, 02, 05);
    assert.equal(calculator.calculate(a, b), 3);
  }
});
