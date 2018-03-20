let test = require('tape');

let countries = require('./index');
let codes = require('./countries.json');

test('Get alpha 3 from country', function (t) {
    t.equal(countries.getAlpha3FromCountry('france'), 'FRA', 'Should get FRA alpha from france word');
    t.equal(countries.getAlpha3FromCountry('France'), 'FRA', 'Should get FRA alpha from France word');
    t.equal(countries.getAlpha3FromCountry('FRANCE'), 'FRA', 'Should get FRA alpha from FRANCE word');
    t.equal(countries.getAlpha3FromCountry('FrAnCe'), 'FRA', 'Should get FRA alpha from FrAnCe word');
    t.equal(countries.getAlpha3FromCountry('French'), 'French', 'Shouln\'d get FRA alpha from French word');
    t.equal(countries.getAlpha3FromCountry('FRA'), 'FRA', 'Shouln\'d get FRA alpha from FRA word');
    t.end();
});

test('Get country from alpha 3', function (t) {
    t.equal(countries.getCountryFromAlpha3('FRA'), 'France', 'Should get France country from FRA alpha');
    t.equal(countries.getCountryFromAlpha3('Fra'), 'France', 'Should get France country from Fra alpha');
    t.equal(countries.getCountryFromAlpha3('fra'), 'France', 'Should get France country from fra alpha');
    t.equal(countries.getCountryFromAlpha3('FRE'), 'FRE', 'Shouln\'d get France country from FRE alpha');
    t.equal(countries.getCountryFromAlpha3('France'), 'France', 'Shouln\‘d get France country from France alpha');
    t.end();
})

test('Test others countries', function (t) {
    t.equal('IOT', countries.getAlpha3FromCountry('British Indian Ocean Territory'), 'Should get IOT alpha');
    t.equal('British indian ocean territory', countries.getCountryFromAlpha3('IOT'), 'Should get IOT country');
    t.equal('BLM', countries.getAlpha3FromCountry('Saint Barthelemy'), 'Should get BLM alpha');
    t.equal('Saint barthelemy', countries.getCountryFromAlpha3('BLM'), 'Should get BLM country');
    t.equal('VAT', countries.getAlpha3FromCountry('Holy See (Vatican City State)'), 'Should get VAT alpha');
    t.equal('Holy see (vatican city state)', countries.getCountryFromAlpha3('VAT'), 'Should get VAT country');
    t.equal('PRK', countries.getAlpha3FromCountry('Korea, Democratic People\'s Republic of'), 'Should get PRK alpha');
    t.equal('Korea, democratic people\'s republic of', countries.getCountryFromAlpha3('PRK'), 'Should get PRK country');
    t.end();
})

test('Test all alpha 3 code & countries name', function (t) {
    for(let country in codes) {
        let code = codes[country];
        let codeResult = countries.getAlpha3FromCountry(country);
        let countryResult = countries.getCountryFromAlpha3(code);

        country = country.charAt(0) + country.slice(1).toLowerCase();

        t.equal(countries.getAlpha3FromCountry(country), code, `Shoud get ${code} alpha from ${country} country`);
        t.equal(countries.getAlpha3FromCountry(countryResult), code, `Shoud get ${code} alpha from ${countryResult} country`);
        t.equal(countries.getCountryFromAlpha3(code), country, `Shoud get ${country} country from ${code} alpha`);
        t.equal(countries.getCountryFromAlpha3(codeResult), country, `Shoud get ${country} country from ${codeResult} alpha`);
    }
    t.end();
})