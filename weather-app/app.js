const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch the weather for'
        }
    })
    .help()
    .argv;
var address = encodeURIComponent(argv.address);


request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});
