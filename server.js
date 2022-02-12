const express = require('express')
const app = express();
const Users  = require("./conrtrollers/users");
const Logs  = require("./conrtrollers/logs");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const uri = process.env.MONGO_URL;
console.log("uri=====>", uri)
 mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
      app.listen(process.env.PORT || 5000, () => {
        app.get('/', (req, res) => {
          res.send('Hello World!')
        });
      app.get('/users', Users.getUsers);
      app.get('/logs', Logs.getLogs);
        console.log(`Example app listening on port ${process.env.PORT}`)
      });
  })


