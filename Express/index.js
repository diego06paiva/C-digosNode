const express = require("express");
const { url } = require("inspector");

const app = express();

const porta = 3000;

const path = require("path");

const userRouters = require("./users/users");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.use("/users", userRouters);

app.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(porta, () => {
  console.log(`Executado na porta: ${porta}`);
});
