const check = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Pode continuar");
    next();
  } else {
    console.log("Parou por ai");
    next();
  }
};

app.use(check);
