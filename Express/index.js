const express = require("express");

const app = express();

const porta = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

/* const check = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Pode continuar");
    next();
  } else {
    console.log("Parou por ai");
    next();
  }
};
 
app.use(check); */

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`ID número: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(porta, () => {
  console.log(`Executado na porta: ${porta}`);
});
