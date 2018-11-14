const knex = require("knex")
const config = require("../../knexfile")[process.env.NODE_ENV || 'development']
const dbConnection = knex(config)

function getChord(chordName) {
  return dbConnection("chord_table")
    .where("chordKey", chordName)
}

module.exports = {
  getChord
}

