const express = require("express");
const app = express();


const cors = require("cors");
const { getPost, addPost } = require("./controller/post");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3001;

app.use(express.json())

app.get("/post", async (req, res) => {
  const post = await getPost();
  res.json(post);
  
})


app.post("/post", async (req, res) => {
  const {titulo, img, description, likes} = req.body
  await addPost(titulo, img, description, likes)
  res.send("Post Agregado con existo")
})

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));