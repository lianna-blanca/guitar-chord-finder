const express = require("express")
const router = express.Router()

const dbFunctions = require("../db/chordDB")

router.get("/", (req,res) => {
  let chordCalled = "D_maj7"
// router.get("/:chord", (req,res) => {
//   let chordCalled = req.param.chord

  dbFunctions.getChord(chordCalled)
  .then(chords => {
    res.send(chords)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router