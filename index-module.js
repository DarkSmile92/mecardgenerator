export const MeCardGen = (
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
) =>
	`MECARD:N:${fName},${lName};EMAIL:${email};TEL:${mobile};URL:${url};ADR:,,${street},${zip} ${city},${state},${country};;`;
