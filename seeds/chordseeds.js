exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("chord_table").del()
    .then(function () {
      // Inserts seed entries
      return knex("chord_table").insert([
        {
          chordKey: "C", 
          chordFretPositions: "X 3 2 0 1 0"
        },
        {
          chordKey: "C_maj7",
          chordFretPositions: "X 3 2 0 0 0"
        },
        {
          chordKey: "C_7",
          chordFretPositions: "X 3 2 3 1 0"
        },
        {
          chordKey: "C_m",
          chordFretPositions: "X 3 5 5 4 3"
        },
        {
          chordKey: "C_m7",
          chordFretPositions: "X 3 5 3 4 3"
        },
        {
          chordKey: "C_dim",
          chordFretPositions: "X 3 4 5 4 X"
        },
        {
          chordKey: "D_m",
          chordFretPositions: "X X 0 2 3 1"
        },
        {
          chordKey: "E_m",
          chordFretPositions: "0 2 2 0 0 0"
        },
        {
          chordKey: "F",
          chordFretPositions: "1 3 3 2 1 1"
        },
        {
          chordKey: "G",
          chordFretPositions: "3 2 0 0 0 3"
        },
        {
          chordKey: "A_m",
          chordFretPositions: "X 0 2 2 1 0"
        },
        {
          chordKey: "A_m7",
          chordFretPositions: "X 0 2 0 1 0"
        },
        {
          chordKey: "B_dim",
          chordFretPositions: "X 2 3 4 3 X"
        },
        {
          chordKey: "D",
          chordFretPositions: "X X 0 2 3 2"
        },
        {
          chordKey: "E",
          chordFretPositions: "0 2 2 1 0 0"
        },
        {
          chordKey: "F#_m",
          chordFretPositions: "2 4 4 2 2 2"
        },
        {
          chordKey: "A",
          chordFretPositions: "X 0 2 2 2 0"
        },
        {
          chordKey: "B_m",
          chordFretPositions: "X 2 4 4 3 2"
        },
        {
          chordKey: "B",
          chordFretPositions: "X 2 4 4 4 2"
        }
      ]);
    });
};

