import compression from "compression";
import express from "express";
import middleware from "./middleware";
import api from "./api";

// Check for PORT environment variable, otherwise fallback on Parcel default port
const PORT = process.env.PORT || 1111;

const app = express();

// Add gzip compression to responses
app.use(compression());

// Expose the public directory as /dist and point to the browser version
app.use("/dist", express.static(`${__dirname}/../client`));

app.get("/api", function (req, res) {
  res.send("Hello World!");
});

// Anything unresolved is serving the application and let
// react-router do the routing!
app.get("/*", middleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
