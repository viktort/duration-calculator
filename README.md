# duration-calculator

A module for calculating the duration between two given dates, irrespective of the order.

## Usage

If you have npm installed

```sh
npm install duration-calculator
```

```js
var durationCalculator = require('duration-calculator');

var duration = durationCalculator.calculate(date1, date2);

console.log('Duration = ' + duration);
```
