var test = require('utest');
var calculator = require('./'); //as logic is in index.js
var assert = require('assert');

test('calculator', {
	'A duration is returned as expected' : function() {
		assert.equal(calculator.calculate('12-12-2011', '15-12-2011'), 3);
	}
});
