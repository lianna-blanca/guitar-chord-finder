import { combineReducers } from "redux"
import selectedChord from "./selectedChord"
import selectedDisplay from "./selectedDisplay"

export default combineReducers({
  selectedDisplay,
  selectedChord
})
