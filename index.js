"use strict";

let codes = require('./countries.json');

module.exports = {
    getAlpha3FromCountry: country => codes[country.toUpperCase()] || country,
    getCountryFromAlpha3: alpha => {
        let country = alpha;
        for(let result in codes) {
            if (codes[result] === alpha.toUpperCase()) country = result.charAt(0) + result.slice(1).toLowerCase();
        }

        return country;
    }
}