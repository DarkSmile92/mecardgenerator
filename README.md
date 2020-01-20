## MeCardGenerator

This package provides a helper to generate [MeCards](<https://en.wikipedia.org/wiki/MeCard_(QR_code)>) to use it with a QR code for phones.

#### Install

`npm i --save mecardgenerator`

#### Usage

###### MeCard only

```js
import MeCardGen from "mecardgenerator";

const mcs = MeCardGen(
	"Jon", // First name
	"Doe", // Last name
	"jon.doe@acme.com", // email address
	"1-316-019-2128", // phone number (can be formatted)
	"https://acme.com/", // website / url
	"758 Elmo Gateway", // Street address
	"Murphyborough", // city
	"WY", // state
	"80562", // zip code
	"United States of America" // country
);
```

###### MeCard with QR Code (react)

To generate a QR Code, use the [qrcode.react](https://github.com/zpao/qrcode.react) library in combination with this package:

```js
import QRCode from "qrcode.react";
import MeCardGen from "mecardgenerator";

const mcs = MeCardGen(
	"Jon", // First name
	"Doe", // Last name
	"jon.doe@acme.com", // email address
	"1-316-019-2128", // phone number (can be formatted)
	"https://acme.com/", // website / url
	"758 Elmo Gateway", // Street address
	"Murphyborough", // city
	"WY", // state
	"80562", // zip code
	"United States of America" // country
);

const QRComponent = () => (
	<QRValue>
		{mcs && (
			<QRCode
				value={mcs}
				size={256}
				bgColor={"#ffffff"}
				fgColor={"#000000"}
				level={"L"}
				includeMargin={true}
				renderAs={"svg"}
			/>
		)}
	</QRValue>
);
```
