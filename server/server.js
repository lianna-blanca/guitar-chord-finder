const express = require("express")
const path = require("path")
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, "..", "public"))) 

const chordRoute = require("./routes/chordcall");
server.use("/api/v1/chord", chordRoute)

module.exports = server