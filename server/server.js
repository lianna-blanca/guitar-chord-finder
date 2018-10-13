const express = require("express")
const path = require("path")
const server = express()
const api = require("./api")
const db = require("./db/dbFunctions")

//Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 

const endpoint = "https://api.uberchord.com/v1/chords/"
const request = require('superagent')

// const exampleRoutes = require("./routes/routeName");
// server.use("/api/v1/route", exampleRoutes)


server.get('/v1/chords/:chord', (req, res) => {
// use two; first from database, if no match, use API AS IT WAS

  api.getChordFromAPI(req.params.chord)
  // request
  //   .get(`${endpoint}/${req.params.chord}`)
  .then(response => {
    res.json(response.body)
  })


  // db.getChordFromDB(req.params.chord)
  //  .then(response => {
  //     if (response !== undefined) {
  //     console.log("in server: response is", response)
  //     res.send(response[0].chordFretPositions)
  //     }
  //   })
  .catch(err => {
    console.log({err})
  })
})

module.exports = server