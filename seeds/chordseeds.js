exports.seed = function(knex, Promise) {
  return knex("chord_table").del()
    .then(function () {
      return knex("chord_table").insert([
        {
          chordKey: "C_maj",
          chordFretPositions: "X 3 2 0 1 0"
        },
        {
          chordKey: "C_m",
          chordFretPositions: "X 3 5 5 4 3"
        },
        {
          chordKey: "C_dim",
          chordFretPositions: "X 3 4 5 4 X"
        },
        {
          chordKey: "C_aug",
          chordFretPositions: "X 3 2 1 1 0"
        },
        {
          chordKey: "C_7",
          chordFretPositions: "X 3 2 3 1 0"
        },
        {
          chordKey: "C_maj7",
          chordFretPositions: "X 3 2 0 0 0"
        },
        {
          chordKey: "C_m7",
          chordFretPositions: "X 3 5 3 4 3"
        },
        {
          chordKey: "D_maj",
          chordFretPositions: "X X 0 2 3 2"
        },
        {
          chordKey: "D_m",
          chordFretPositions: "X X 0 2 3 1"
        },
        {
          chordKey: "D_dim",
          chordFretPositions: "X X 0 1 3 1"
        },
        {
          chordKey: "D_aug",
          chordFretPositions: "X X 0 3 3 2"
        },
        {
          chordKey: "D_7",
          chordFretPositions: "X X 0 2 1 2"
        },
        {
          chordKey: "D_maj7",
          chordFretPositions: "X X 0 2 2 2"
        },
        {
          chordKey: "D_m7",
          chordFretPositions: "X X 0 2 1 1"
        },
        {
          chordKey: "Db_maj",
          chordFretPositions: "X 4 3 1 2 1"
        },
        {
          chordKey: "Db_m",
          chordFretPositions: "X 4 6 6 5 4"
        },
        {
          chordKey: "Db_dim",
          chordFretPositions: "X 4 2 0 2 0"
        },
        {
          chordKey: "Db_aug",
          chordFretPositions: "X 4 3 2 2 5"
        },
        {
          chordKey: "Db_7",
          chordFretPositions: "X 4 6 4 6 4"
        },
        {
          chordKey: "Db_maj7",
          chordFretPositions: "X 4 6 5 6 4"
        },
        {
          chordKey: "Db_m7",
          chordFretPositions: "X 4 2 1 0 0"
        },
        {
          chordKey: "E_maj",
          chordFretPositions: "0 2 2 1 0 0"
        },
        {
          chordKey: "E_m",
          chordFretPositions: "0 2 2 0 0 0"
        },
        {
          chordKey: "E_dim",
          chordFretPositions: "X 7 X 9 8 6"
        },
        {
          chordKey: "E_aug",
          chordFretPositions: "0 X 2 1 1 0"
        },
        {
          chordKey: "E_7",
          chordFretPositions: "0 2 0 1 0 0"
        },
        {
          chordKey: "E_maj7",
          chordFretPositions: "0 X 2 4 4 4"
        },
        {
          chordKey: "E_m7",
          chordFretPositions: "0 2 0 0 0 0"
        },
        {
          chordKey: "Eb_maj",
          chordFretPositions: "X 6 5 3 4 3"
        },
        {
          chordKey: "Eb_m",
          chordFretPositions: "X X 1 3 4 2"
        },
        {
          chordKey: "Eb_dim",
          chordFretPositions: "X 6 7 8 7 X"
        },
        {
          chordKey: "Eb_aug",
          chordFretPositions: "X X 1 0 0 3"
        },
        {
          chordKey: "Eb_7",
          chordFretPositions: "X X 1 3 2 3"
        },
        {
          chordKey: "Eb_maj7",
          chordFretPositions: "X X 1 3 3 3"
        },
        {
          chordKey: "Eb_m7",
          chordFretPositions: "X X 1 3 2 2"
        },
        {
          chordKey: "F_maj",
          chordFretPositions: "1 3 3 2 1 1"
        },
        {
          chordKey: "F_m",
          chordFretPositions: "1 3 3 1 1 1"
        },
        {
          chordKey: "F_dim",
          chordFretPositions: "1 X 3 1 0 X"
        },
        {
          chordKey: "F_aug",
          chordFretPositions: "1 X 3 2 2 1"
        },
        {
          chordKey: "F_7",
          chordFretPositions: "1 3 1 2 4 1"
        },
        {
          chordKey: "F_maj7",
          chordFretPositions: "1 X 2 2 1 0"
        },
        {
          chordKey: "F_m7",
          chordFretPositions: "1 3 1 1 1 1"
        },
        {
          chordKey: "G_maj",
          chordFretPositions: "3 2 0 0 0 3"
        },
        {
          chordKey: "G_m",
          chordFretPositions: "3 5 5 3 3 3"
        },
        {
          chordKey: "G_dim",
          chordFretPositions: "X 10 11 12 11 X"
        },
        {
          chordKey: "G_aug",
          chordFretPositions: "3 2 1 0 0 X"
        },
        {
          chordKey: "G_7",
          chordFretPositions: "3 2 0 0 0 1"
        },
        {
          chordKey: "G_maj7",
          chordFretPositions: "3 X 4 4 3 X"
        },
        {
          chordKey: "G_m7",
          chordFretPositions: "3 5 3 3 3 3"
        },
        {
          chordKey: "Gb_maj",
          chordFretPositions: "2 4 4 3 2 2"
        },
        {
          chordKey: "Gb_m",
          chordFretPositions: "2 4 4 2 2 2"
        },
        {
          chordKey: "Gb_dim",
          chordFretPositions: "X 9 10 11 10 X"
        },
        {
          chordKey: "Gb_aug",
          chordFretPositions: "2 X 4 3 3 2"
        },
        {
          chordKey: "Gb_7",
          chordFretPositions: "2 4 2 3 5 2"
        },
        {
          chordKey: "Gb_maj7",
          chordFretPositions: "2 X 3 3 2 X"
        },
        {
          chordKey: "Gb_m7",
          chordFretPositions: "2 4 2 2 2 2"
        },
        {
          chordKey: "A_maj",
          chordFretPositions: "X 0 2 2 2 0"
        },
        {
          chordKey: "A_m",
          chordFretPositions: "X 0 2 2 1 0"
        },
        {
          chordKey: "A_dim",
          chordFretPositions: "X 0 1 2 1 X"
        },
        {
          chordKey: "A_aug",
          chordFretPositions: "X 0 3 2 2 1"
        },
        {
          chordKey: "A_7",
          chordFretPositions: "X 0 2 0 2 0"
        },
        {
          chordKey: "A_maj7",
          chordFretPositions: "X 0 2 2 2 4"
        },
        {
          chordKey: "A_m7",
          chordFretPositions: "X 0 2 0 1 0"
        },
        {
          chordKey: "Ab_maj",
          chordFretPositions: "4 6 6 5 4 4"
        },
        {
          chordKey: "Ab_m",
          chordFretPositions: "4 6 6 4 4 4"
        },
        {
          chordKey: "Ab_dim",
          chordFretPositions: "X 11 12 13 12 X"
        },
        {
          chordKey: "Ab_aug",
          chordFretPositions: "4 X 6 5 5 4"
        },
        {
          chordKey: "Ab_7",
          chordFretPositions: "4 6 4 5 7 4"
        },
        {
          chordKey: "Ab_maj7",
          chordFretPositions: "4 X 5 5 4 X"
        },
        {
          chordKey: "Ab_m7",
          chordFretPositions: "4 6 4 4 4 4"
        },
        {
          chordKey: "B_maj",
          chordFretPositions: "X 2 4 4 4 2"
        },
        {
          chordKey: "B_m",
          chordFretPositions: "X 2 4 4 3 2"
        },
        {
          chordKey: "B_dim",
          chordFretPositions: "X 2 3 4 3 X"
        },
        {
          chordKey: "B_aug",
          chordFretPositions: "X 2 1 0 0 3"
        },
        {
          chordKey: "B_7",
          chordFretPositions: "X 2 4 2 4 2"
        },
        {
          chordKey: "B_maj7",
          chordFretPositions: "X 2 4 3 4 2"
        },
        {
          chordKey: "B_m7",
          chordFretPositions: "X 2 0 2 0 2"
        },
        {
          chordKey: "Bb_maj",
          chordFretPositions: "X 1 3 3 3 1"
        },
        {
          chordKey: "Bb_m",
          chordFretPositions: "X 1 3 3 2 1"
        },
        {
          chordKey: "Bb_dim",
          chordFretPositions: "X 1 2 3 2 0"
        },
        {
          chordKey: "Bb_aug",
          chordFretPositions: "X 1 0 3 3 2"
        },
        {
          chordKey: "Bb_7",
          chordFretPositions: "X 1 3 1 3 1"
        },
        {
          chordKey: "Bb_maj7",
          chordFretPositions: "X 1 3 2 3 1"
        },
        {
          chordKey: "Bb_m7",
          chordFretPositions: "X 1 3 1 2 1"
        }
      ]);
    });
};

