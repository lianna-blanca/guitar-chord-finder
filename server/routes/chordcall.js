const express = require("express")
const router = express.Router()

const dbFunctions = require("../db/dbFunctions")

router.get("/", (req,res) => {

  dbFunctions.getChord()
  .then(dataFromDBFunction => {
// console.log("------------ routes/routeName.js --------")
// console.log(dataFromDBFunction)
    res.send(dataFromDBFunction)
  })

})

module.exports = router