const pool = require("../config/pool");

const getPost = async () => {
  const {rows} = await pool.query("SELECT * FROM post")
  return rows
};

const addPost = async (titulo, img, description, likes) => {
  const consulta = "INSERT INTO post values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, description, likes];
  const result = await pool.query(consulta, values);
  console.log("Post Agregado con exito ");
};


module.exports = {
  getPost,
  addPost
};
