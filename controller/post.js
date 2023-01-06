const pool = require("../config/pool");

const getPost = async () => {
  const { rows } = await pool.query("SELECT * FROM post");
  return rows;
};

const addPost = async (titulo, img, description, likes) => {
  const consulta = "INSERT INTO post values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, description, likes];
  const result = await pool.query(consulta, values);
  console.log("Post Agregado con exito ");
};

const updateLike = async (id) => {
  const consulta = "UPDATE post SET likes = likes +1 WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  
};

const deletePost = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

const addLike = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

module.exports = {
  getPost,
  addPost,
  deletePost,
  addLike
};
