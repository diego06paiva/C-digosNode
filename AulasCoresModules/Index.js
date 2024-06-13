/* const meumodulo = require("./meumodulo");
const soma = meumodulo.soma;

soma(20, 20);
 */

/* import soma from "./meumodulo.mjs";

soma(10, 20);
 */

/* const http = require("http");

const porta = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Contenty-type", "text/html");
  res.end("<h1>Texto dentro de pasta</h1>");
});

server.listen(porta, () => {
  console.log(`Ouvindo na porta ${porta}`);
});
 */

/* const url = require("url");

const adress = "https://www.meusite.com.br/catalog?produtos=cadeira";
const paseURL = new url.URL(adress);

console.log(paseURL.hash);
console.log(paseURL.host);
console.log(paseURL.hostname);
console.log(paseURL.href);
console.log(paseURL.search);
console.log(paseURL.searchParams);
console.log(paseURL.searchParams.get("produtos"));
 */

const os = require("os");

if (os.freemem() === 1141563392) {
  console.log("ai é foda");
} else {
  console.log("foi ");
}
