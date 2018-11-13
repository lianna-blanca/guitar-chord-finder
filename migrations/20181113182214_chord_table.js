exports.up = function(knex, Promise) {
  return knex.schema.createTable("chord_table", table => {
    table.increments("id")
    table.string("chordKey")
    table.string("chordFretPositions")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("chord_table")
};