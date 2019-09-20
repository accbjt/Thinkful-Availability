const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/today", async (req, res) => {
    const url = 'https://www.thinkful.com/api/advisors/availability';
    try {
        const fetchResponse = await fetch(url).then(response => response.json());

        res.send(fetchResponse);
    } catch (err) {
        const error = new Error(err.message);

        error.status = '500'
        throw error;
    }
});

function today() {
    return new Date().toLocaleDateString();
}

app.today = today;
module.exports = app;