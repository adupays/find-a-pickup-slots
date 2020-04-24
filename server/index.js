import compression from "compression";
import express from "express";
import middleware from "./middleware";
import api from "./api";

// Check for PORT environment variable, otherwise fallback on Parcel default port
const LISTEN_PORT = process.env.PORT || 1111;

const app = express();

// Add gzip compression to responses
app.use(compression());

// Expose the public directory as /dist and point to the browser version
app.use("/dist", express.static(`${__dirname}/../client`));

app.get("/api", function (req, res) {
  res.send("API!");
});

// Anything unresolved is serving the application and let
// react-router do the routing!
if (process.env.NODE_ENV === "production") {
  app.get("/*", middleware);
}

app.listen(LISTEN_PORT, () => {
  console.log(`Listening on port ${LISTEN_PORT}...`);
});
