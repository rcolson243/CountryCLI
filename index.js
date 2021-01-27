const fetch = require("node-fetch");
var countries = require('country-list');
let date = new Date();

function getData(year = date.getFullYear(), countryCode = "BE") {
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
        });
}

function getCountryCode(country) {
    // Convert a First lower Letter to Capital latter
    let capitalLetter = country.charAt(0).toUpperCase() + country.slice(1);
    // Get All Countries
    const allCountry = countries.getNames();
    for (let i = 0; i < allCountry.length; i++) {
        // Check if Country is found in All Countries
        if (allCountry[i] === capitalLetter) {
            // Get Country Code 
            let countryCode = country.slice(0, 2).toUpperCase();
            // Call Function Get Data
            getData(2020, countryCode)
        }
    }

}

getCountryCode("belgium");


// module.exports = getCountryCode;
