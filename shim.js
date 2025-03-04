'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimDatePrototypeGetYear() {
	var polyfill = getPolyfill();

	define(
		Date.prototype,
		{ getYear: polyfill },
		{ getYear: function () { return Date.prototype.getYear !== polyfill; } }
	);

	return polyfill;
};
