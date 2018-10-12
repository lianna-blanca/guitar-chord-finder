function selectedDisplay (state = {fretDisplay: "clear"}, action) {
  switch (action.type) {
    case "SELECT_DISPLAY": 
      return action.display

    default:
      return state
  }
}

export default selectedDisplay