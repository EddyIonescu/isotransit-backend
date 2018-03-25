const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(1507, () => console.log('Isotransit Backend on Port 1507'))
