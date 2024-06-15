const express = require("express");
const { url } = require("inspector");

const app = express();

const porta = 3000;

const path = require("path");

<<<<<<< HEAD
const userRouters = require("./users");
=======

const userRouters = require('./users/users')

>>>>>>> 182585b02a7d9af4b709e18bafb8279987df8fde

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

<<<<<<< HEAD
app.use("/users", userRouters);
=======
app.use('/users', userRouters)
app.use()
>>>>>>> 182585b02a7d9af4b709e18bafb8279987df8fde

app.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(porta, () => {
  console.log(`Executado na porta: ${porta}`);
});
