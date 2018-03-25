const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Transit/Tech Geek!'));

app.listen(1507, () => console.log('Isotransit Backend on Port 1507'));

app.get('/driving', (req, res) => {
  // TODO - make Bing Maps Isochrone API calls here
});

app.get('/transit', (req, res) => {
  // Valhalla call here
});
