const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=eh65jj',
    json: true
}, (error, response, body) => {
    console.log(body);
});
