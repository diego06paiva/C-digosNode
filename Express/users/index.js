const express = require("express")
const router = express.Router()
const path = require("path")


const basePath = path.join(__dirname, "../templates");

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


router.get('/add', (req, res) =>{
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) =>{
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`Nome ${name} idade ${age}`)

  res.sendFile(`${basePath}/userform.html`)
})

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`ID número: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router
