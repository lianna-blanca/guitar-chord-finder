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
  console.log("in server: req.params.chord is", req.params.chord)
    // res.json([{strings: "X 3 2 0 1 0"}])
    // api.getChord(req.params.chord)
    db.getChord(req.params.chord)

    // request
    //   .get(`${endpoint}/${req.params.chord}`)
    .then(response => {
      console.log("in server: response is", response)
      // res.json(response.body)
    })
    .catch(err => {
      console.log({err})
    })
})


module.exports = server