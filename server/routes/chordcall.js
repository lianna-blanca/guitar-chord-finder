const express = require("express")
const router = express.Router()

const dbFunctions = require("../db/chordDB")

router.get("/", (req,res) => {
  let chordCalled = "E_maj7" //req.param.chordName

  dbFunctions.getChord(chordCalled)
  .then(chords => {
console.log("------------ routes/routeName.js --------")
console.log(chords)
    // for (let i = 0; i < chords.length; i++) {
    //   console.log(chords[i].chordKey)
      
    // }


    res.send(chords)
  })

})

module.exports = router