import request from "superagent"
const APIendpoint = "/v1/chords/"

export function getAPIChordFrets(chord) {
// do all the swapping of fret array to strings HERE

  return request.get(APIendpoint + chord)
}