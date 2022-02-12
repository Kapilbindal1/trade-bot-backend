const port = 3000;
const express = require('express')
const app = express();
const Users  = require("./conrtrollers/users");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const uri = process.env.MONGO_URL;
console.log("uri=====>", uri)
 mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    app.get('/', (req, res) => {
        res.send('Hello World!')
      });
    app.get('/users', Users.getUsers);
      
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
      });
  })


