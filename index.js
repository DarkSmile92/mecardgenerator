"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var MeCardGen = function MeCardGen(fName, lName, email, mobile, url, street, city, state, zip, country) {
  return "MECARD:N:".concat(fName, ",").concat(lName, ";EMAIL:").concat(email, ";TEL:").concat(mobile, ";URL:").concat(url, ";ADR:,,").concat(street, ",").concat(zip, " ").concat(city, ",").concat(state, ",").concat(country, ";;");
};

var _default = MeCardGen;
exports["default"] = _default;
