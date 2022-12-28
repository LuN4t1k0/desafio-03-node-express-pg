const express = require("express");
const app = express();

const cors = require("cors");
const { getPost, addPost } = require("./controller/post");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

/* Este es un middleware que nos permite servir archivos estáticos. */
app.use(express.static("public"));

app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/public/index.html");
  } catch (error) {
    res.json({ message: "El recurso no esta disponible " });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const post = await getPost();
    let modificado = post.map((p) => ({
      id: p.id,
      titulo: p.titulo,
      img: p.img,
      descripcion: p.description,
    }));
    res.json(modificado);
  } catch (error) {
    res.json({ message: "El recurso no esta disponible " });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion, likes } = req.body;
    console.log(req.body);

    // if (Object.values(cancion).some((value) => value === "")) {
    //   return res.status(400).json({ message: "Falta completar un campo " });
    // }

    await addPost(titulo, url, descripcion, likes);
    res.send("Post Agregado con existo");
  } catch (error) {
    res.json({ message: "El recurso no esta disponible " });
  }
});

app.listen(PORT, console.log(`servidor corriendo en el Puerto : ${PORT}`));
