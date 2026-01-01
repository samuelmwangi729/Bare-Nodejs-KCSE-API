const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { KCSE } = require("./controllers/kcse.controller");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/kcse", KCSE);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`KCSE API running on port ${PORT}`);
});
