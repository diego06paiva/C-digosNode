const express = require("express");
const exphbs = require("express-handlebars");
//const mysql = require("mysql"); - Máquina pessoal
//const mysql2 = require("mysql2") - Máquina do trabalho
const pool = require("./db/conn");
const path = require("path");
const porta = 3000;
const app = express();

const basepath = path.join(__dirname, "views");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.get("/app", (req, res) => {
  res.sendFile(`${basepath}/app.html`);
});

app.post("/enviar-dados/livros", (req, res) => {
  const titulos = req.body.titulos;
  const paginas = req.body.paginas;

  const sql = `INSERT INTO livros (??, ??) VALUES (?, ?)`;

  const values = ["titulos", "paginas", titulos, paginas];

  pool.query(sql, values, function (err) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }

    res.redirect("/");
  });
});

app.get("/livros", (req, res) => {
  const sql = "SELECT * FROM livros";

  pool.query(sql, function (err, dados) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }
    const livros = dados;
    //console.log(livros);

    res.render("livros", { livros });
  });
});

app.get("/dados/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM livros WHERE ?? = ?`;

  const value = ["id", id];

  pool.query(sql, value, function (err, dados) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }
    const livros = dados[0];
    res.render("dados", { livros });
  });
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(basepath, "index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(basepath, "index.html"));
});

app.get("/livros/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM livros WHERE ?? = ?`;

  const value = ["id", id];

  pool.query(sql, value, function (err, dados) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }

    const livrosed = dados[0];
    res.render("livrosed", { livrosed });
  });
});

app.post("/livros/livrosed/", (req, res) => {
  const id = req.body.id;
  const titulos = req.body.titulos;
  const paginas = req.body.paginas;

  const sql = `UPDATE livros SET titulos = ?, paginas = ? WHERE id = ?`;

  const values = [titulos, paginas, id];

  pool.query(sql, values, function (err) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }
  });

  res.redirect("/livros");
});

app.post("/livros/remover/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM livros WHERE ?? = ?`;

  const value = ["id", id];

  pool.query(sql, value, function (err) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }
    res.redirect("/livros");
  });
});

app.listen(porta, () => {
  console.log(`Rodando na porta 3000`);
});
