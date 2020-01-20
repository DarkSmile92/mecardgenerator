"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var MeCardGen = function MeCardGen(
	fName,
	lName,
	email,
	mobile,
	url,
	street,
	city,
	state,
	zip,
	country
) {
	return (
		"MECARD:N:" +
		fName +
		"," +
		lName +
		";EMAIL:" +
		email +
		";TEL:" +
		mobile +
		";URL:" +
		url +
		";ADR:,," +
		street +
		"," +
		zip +
		" " +
		city +
		"," +
		state +
		"," +
		country +
		";;"
	);
};

exports.default = MeCardGen;
