'use strict';

var v = require('es-value-fixtures');
var inspect = require('object-inspect');
var forEach = require('for-each');

function getUTCYear(y) {
	var d = new Date(Date.UTC(y));
	d.setHours(d.getHours() + (d.getTimezoneOffset() / 60));
	return d;
}

module.exports = function (getYear, t) {
	forEach([].concat(v.primitives, v.objects), function (nonDate) {
		t['throws'](
			function () { getYear(nonDate); },
			TypeError,
			inspect(nonDate) + ' is not a Date object'
		);
	});

	t.equal(getYear(new Date(NaN)), NaN, 'invalid date yields NaN');

	t.equal(getYear(getUTCYear(2023)), 123, 'new Date(Date.UTC(2023))');
	t.equal(getYear(getUTCYear(1900)), 0, 'new Date(Date.UTC(1900))');
	t.equal(getYear(getUTCYear(1901)), 1, 'new Date(Date.UTC(1901))');
	t.equal(getYear(getUTCYear(2000)), 100, 'new Date(Date.UTC(2020))');
};
