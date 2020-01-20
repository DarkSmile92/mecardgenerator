"use strict";

function MeCardGen(
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
	return "MECARD:N:"
		.concat(fName, ",")
		.concat(lName, ";EMAIL:")
		.concat(email, ";TEL:")
		.concat(mobile, ";URL:")
		.concat(url, ";ADR:,,")
		.concat(street, ",")
		.concat(zip, " ")
		.concat(city, ",")
		.concat(state, ",")
		.concat(country, ";;");
}

module.exports = MeCardGen;
