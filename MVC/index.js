const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");
const path = require("path");
const porta = 3000;
const task = require("./models/Task");

const app = express();

app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(porta, () => {
  console.log(`Rodando na porta 3000`);
});
