'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Date.prototype.getYear || implementation;
};
