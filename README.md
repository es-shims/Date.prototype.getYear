# date.prototype.getyear <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES spec-compliant `Date.prototype.getYear` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-date.prototype.getyear).

Because `Date.prototype.getYear` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var getYear = require('date.prototype.getyear');
var assert = require('assert');

var d = new Date(Date.UTC(2000));
d.setHours(d.getHours() + (d.getTimezoneOffset() / 60)); // to account for the local TZ

assert.equal(getYear(d), 100);
```

```js
var shim = require('date.prototype.getyear/shim');
var getPolyfill = require('date.prototype.getyear/polyfill');
var assert = require('assert');
/* when Date#getYear is not present */
delete Date.prototype.getYear;
var shimmed = shim();
assert.equal(shimmed, getPolyfill());
assert.equal(shimmed, Date.prototype.getYear);
assert.equal(new Date().getYear(), getYear(new Date()));
```

```js
var shim = require('date.prototype.getyear/shim');
var assert = require('assert');
/* when Date#getYear is present */
var shimmed = shim();
assert.equal(shimmed, Date.prototype.getYear);
assert.equal(new Date().getYear(), getYear(new Date()));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/date.prototype.getyear
[npm-version-svg]: https://versionbadg.es/es-shims/Date.prototype.getYear.svg
[deps-svg]: https://david-dm.org/es-shims/Date.prototype.getYear.svg
[deps-url]: https://david-dm.org/es-shims/Date.prototype.getYear
[dev-deps-svg]: https://david-dm.org/es-shims/Date.prototype.getYear/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Date.prototype.getYear#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/date.prototype.getyear.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/date.prototype.getyear.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/date.prototype.getyear.svg
[downloads-url]: https://npm-stat.com/charts.html?package=date.prototype.getyear
[codecov-image]: https://codecov.io/gh/es-shims/Date.prototype.getYear/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Date.prototype.getYear/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Date.prototype.getYear
[actions-url]: https://github.com/es-shims/Date.prototype.getYear/actions
