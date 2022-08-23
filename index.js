const express = require("express")
const moongose = require("moongose")

const app = express()
require("dotenv").config()
const port = 5000 || process.env.PORT

app.listen(port, () => { console.log('Port Active', port);})

moongose
  .connect(process.env.DATA_STRING_CONNECTION)
  .then(() => { })
  .catch((err) => { })
