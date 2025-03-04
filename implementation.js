'use strict';

var YearFromTime = require('es-abstract/2024/YearFromTime');
var msPerMinute = require('es-abstract/helpers/timeConstants').msPerMinute;

var $TypeError = require('es-errors/type');
var isDate = require('is-date-object');
var callBound = require('call-bound');

var $getTime = callBound('Date.prototype.getTime');
var $getTimezoneOffset = callBound('Date.prototype.getTimezoneOffset');

module.exports = function getYear() {
	var dateObject = this; // step 1

	if (!isDate(dateObject)) {
		throw new $TypeError('Method Date.prototype.getYear called on incompatible receiver'); // step 2
	}

	var t = $getTime(dateObject); // step 3

	if (isNaN(t)) {
		return NaN; // step 4
	}

	var localtime = t - ($getTimezoneOffset(dateObject) * msPerMinute);

	return YearFromTime(localtime) - 1900; // step 5
};
