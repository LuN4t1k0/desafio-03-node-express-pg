require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));

