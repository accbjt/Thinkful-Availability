const app = require("./app");
const request = require('supertest');
const formatAvailabilitiesData = require('./test-data/app/formatAvailabilities')
const availabilitiesGetData = require('./test-data/app/availabilities/get');

const fetch = require('node-fetch');

describe("app", () => {
    it("/today returns today's formatted date", () => {
        expect(app._today()).toBe(new Date().toLocaleDateString());
    });

    it("formatAvailabilities returns formatted version of availabilities", () => {
        const { apiRequestData, expectedResult } = formatAvailabilitiesData;

        expect(app._formatAvailabilities(apiRequestData).toString()).toBe(expectedResult.toString());
    });

    it("GET /availabilities should give back formatted data", async (done) => {
        const { apiResponse, expectedResponse } = availabilitiesGetData
        fetch.mockResponse(JSON.stringify(apiResponse));

        const responseData = await request(app).get('/availabilities').then(res => res.text);

        expect(responseData).toBe(JSON.stringify(expectedResponse));
        done();
    });
});