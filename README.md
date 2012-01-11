# duration-calculator

## viktort

[![Build Status](https://secure.travis-ci.org/viktort/duration-calculator.png)](http://travis-ci.org/viktort/duration-calculator)

## shackpank (fork)

[![Build Status](https://secure.travis-ci.org/shackpank/duration-calculator.png)](http://travis-ci.org/shackpank/duration-calculator)


A module for calculating the duration between two given dates, irrespective of the order.

## Usage

If you have npm installed

```sh
$ npm install duration-calculator
```

Inside a js file:

```js
var durationCalculator = require('duration-calculator');

var duration = durationCalculator.calculate(date1, date2);

console.log('Duration = ' + duration);
```

##Additional
Duration calculator works with Day Light Saving hours too. Tests are in place in test.js. 
Thanks to [Ollie Buck](https://github.com/shackpank) for contributing. Current version in now
available from npm.
