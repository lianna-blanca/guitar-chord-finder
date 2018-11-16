import request from "superagent"
const APIendpoint = "/api/v1/chord/"

export function getAPIChordFrets(chord) {
  return request.get(APIendpoint + chord)
}