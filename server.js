const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./app/db/models/index.js");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Tabelas Dropadas e Sincronizadas")
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//POST,PUT,DELETE,GET
app.get("/", (req, res) => {
  res.json({
    message: "Grupou API" 
  })
})


require("./app/routes")(app);
//require("./app/routes/usuario.routes")(app);

//const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Servidor Rodando!')
})