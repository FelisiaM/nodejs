const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=edinburgh',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
