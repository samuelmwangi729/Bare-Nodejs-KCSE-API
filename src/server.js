const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const serverless = require("serverless-http"); // <- required for serverless
const { KCSE } = require("./controllers/kcse.controller");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/kcse", KCSE);

// Export the app as a serverless handler
module.exports.handler = serverless(app);
