const knex = require("knex")
const config = require("../../knexfile")[process.env.NODE_ENV || 'development']
const dbConnection = knex(config)

function getChord() {
  return dbConnection("chord_table")
  .then(tableData => {
// console.log("------------ db/dbFunctions.js --------")
// console.log(tableData)

    return tableData.map(dbObject => {
      // if (dbObject.chordKey === chordName) {
        return dbObject
      // }
    })
  })
}

module.exports = {
  getChord
}

