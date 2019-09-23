const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const uuid = require('uuid');

const app = express();
const appointments = [];
const cache = {
    appointments: [],
    availabilities: {},
    addAppointment: function(appointment) {
        this.appointments.push(appointment);
        this.availabilities[appointment.advisorId] = this.availabilities[appointment.advisorId].filter(
            availability => availability !== appointment.time
        );
    },
}

const today = () => {
    return new Date().toLocaleDateString();
}

const formatAvailabilities = availabilities => {
    return Object.keys(availabilities).reduce((accum, key) => {
        const allAvailabilitiesByDate = availabilities[key];

        Object.keys(allAvailabilitiesByDate).forEach(date => {
        const id = allAvailabilitiesByDate[date];

        accum = {
            ...accum,
            [id]: accum[id] ? [...accum[id], date] : [date],
        };
        });

        return accum;
    }, {});
};

app.use(cors());
app.use(bodyParser.json());

app.get("/today", async (req, res) => {
    res.send({
        today: today()
    });
});

app.get("/availabilities", async (req, res) => {
    const url = 'https://www.thinkful.com/api/advisors/availability';

    if (Object.keys(cache.availabilities).length > 0) {
        res.send(cache.availabilities);
    } else {
        try {
            const fetchResponse = await fetch(url).then(response => response.json());
            const formattedAvailabilities = formatAvailabilities(fetchResponse);

            cache.availabilities = formattedAvailabilities;

            res.send(formattedAvailabilities);
        } catch (err) {
            const error = new Error(err.message);
    
            error.status = '500'
            throw error;
        }
    }
});

app.get("/appointments", async (req, res) => {
    res.send(cache.appointments);
});

app.post("/appointments", async (req, res) => {
    const record = { id: uuid(), ...req.body };
    cache.addAppointment(record);

    res.send(record);
});

app._formatAvailabilities = formatAvailabilities;
app._today = today;
module.exports = app;