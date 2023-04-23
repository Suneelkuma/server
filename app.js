const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieparser=require("cookie-parser")
// const registerRoutes=require('./routes/auth')
dotenv.config({path:'./config.env'});

app.use(express.json())
app.use(cookieparser())
require('./db/conn')
const PORT=process.env.PORT;



app.use(require('./routes/auth'))

app.use(require('./routes/company'))
app.use(require('./routes/data'))
app.use(require('./routes/searchRoutes'))
app.get("/", (req, res) => {
    res.send("ok");
  });
  app.use(require("./routes/data"))
  // app.get("/about", middleware, (req, res) => {
  //   res.send("Hello I am about page");
  // });
  app.listen(PORT, () => console.log(`server is up at port ${PORT}`));
  