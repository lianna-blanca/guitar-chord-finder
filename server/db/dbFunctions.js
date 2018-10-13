// ---------------------- Methods for knex database, async

const knex = require("knex")
const config = require("../../knexfile")[process.env.NODE_ENV || 'development']
const dbConnection = knex(config)

function getChord(calledChord) {
  return dbConnection("chord_table")
  .then(tableData => {
    return tableData.map(chordObject => {
      if (chordObject.chordKey === calledChord) {
        console.log("MATCH!", chordObject.chordFretPositions)
        return chordObject.chordFretPositions
      }
      // else console.error("Error; chord not found"); // later use for getting API and adding to DB      
    })
  })
  .catch(err => {
    console.log({err})
  })
}

module.exports = {
  getChord
}

