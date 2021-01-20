const SignalServer = require("react-rtc-real/server/SignalServer.js");
const express = require("express");
const https = require("http");

const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

const server = https.createServer(app);

const signal = new SignalServer({ server });
signal.connect();

server.listen(3300, () => console.log("listening on 3300"));
