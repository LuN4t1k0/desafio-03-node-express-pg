const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile("./static/index.html", {
    root: __dirname,
  });
});
