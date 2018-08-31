const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress = encodeURIComponent(argv.address);

var geocodeUrl = ` https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get( geocodeUrl ).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat ;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/5e37c732eaa4e87e3585a01b0b59b222/${lat},${lng}` ;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response)=> {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`it's currently ${temperature} but  it feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code == 'ENOTFOUND') {
        console.log('Unable to connect to api servers');
    } else {
        console.log(e.message );
    }
})