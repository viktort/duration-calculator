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
  }
});
