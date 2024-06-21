const express = require("express");
const exphbs = require("express-handlebars");
//const mysql = require("mysql");
const mysql2 = require("mysql2")
const path = require("path");
const porta = 3000;
const app = express();

const basepath = path.join(__dirname, "templates");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine({ defaultLayout: false }));
app.set("view engine", "handlebars");

const conn = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "vasco",
  database: "diego",
  port: 3306
});

conn.connect(function (err) {
  if (err) {
    console.log(`Erro: ${err}`);
  }

  console.log("Conectou ao MySQL");
});

app.get("/app", (req, res) => {
  res.sendFile(`${basepath}/app.html`);
});

app.post("/enviar-dados/livros", (req, res) => {
  const titulos = req.body.titulos;
  const paginas = req.body.paginas;

  const sql = `INSERT INTO livros (titulos, paginas) VALUES ('${titulos}', '${paginas}')`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }

    res.redirect("/");
  });
});

app.get("/livros", (req, res) => {
  const sql = "SELECT * FROM livros";

  conn.query(sql, function (err, dados) {
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

  const sql = `SELECT * FROM livros WHERE id = ${id}`;

  conn.query(sql, function (err, dados) {
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

  const sql = `SELECT * FROM livros WHERE id = ${id}`;

  conn.query(sql, function (err, dados) {
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

  const values = [titulos, paginas, id]

  conn.query(sql, values, function (err) {
    if (err) {
      console.log(`ERRO: ${err}`);
      return;
    }
  });

  res.redirect("/livros");
});

app.listen(porta, () => {
  console.log(`Rodando na porta 3000`);
});
