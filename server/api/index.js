const express = require("express");
const axios = require("axios").default;

const LISTEN_PORT = process.env.API_LISTEN_PORT || 1111;

const app = express();

const HOST = "http://localhost:8089";

app.get("/api/stores", function (req, res) {
  if (!req.query.postalCode) res.sendStatus(500);
  axios
    .get(`${HOST}/stores?postalCode=${req.query.postalCode}`)
    .then(function (response) {
      res.append("Access-Control-Allow-Origin", "*");
      res.append("Content-Type", "application/json");

      res.json({
        data: response.data.map((drive) => ({
          value: drive.DriveID,
          label: drive.Name,
        })),
        meta: { total: response.data.length },
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(LISTEN_PORT, () => {
  console.log(`Listening on port ${LISTEN_PORT}...`);
});
