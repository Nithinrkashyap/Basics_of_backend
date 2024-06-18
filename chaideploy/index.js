
require('dotenv').config()
const express = require('express')

const app = express();

app.get('/', (req, res) => {

    res.send('hi')
});


app.get('/nithin', (req, res) => {

    res.send("<h1>Nithin at </h1>")

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`port is listening at  https://localhost:${port}`);
});
