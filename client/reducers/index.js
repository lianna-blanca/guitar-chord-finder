import { combineReducers } from "redux"
import selectedChord from "./selectedChord"
import selectedDisplay from "./selectedDisplay"

const reducers = combineReducers({
  selectedChord: selectedChord,
  selectedDisplay: selectedDisplay
})

export default reducers