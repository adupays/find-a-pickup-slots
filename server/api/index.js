const express = require("express");

const PORT = process.env.API_LISTEN_PORT || 1111;

const app = express();

app.get("/api", function (req, res) {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
