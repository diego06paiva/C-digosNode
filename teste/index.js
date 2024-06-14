const express = require("express");
const path = require("path");
const app = express();
const porta = 3000;

const userRouter = require("./users/user");

const basePath = path.join(__dirname, "templates");

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(porta, () => {
  console.log(`Exibindo na porta ${porta}`);
});
