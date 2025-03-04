'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var hasStrictMode = require('has-strict-mode')();

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Date.prototype.getYear.length, 0, 'Date#getYear has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Date.prototype.getYear.name, 'getYear', 'Date#getYear has name "getYear"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Date.prototype, 'getYear'), 'Date#getYear is not enumerable');
		et.end();
	});

	t.test('bad Date/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Date.prototype.getYear.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Date.prototype.getYear.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Date.prototype.getYear), t);

	t.end();
});
