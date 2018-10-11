const initialState = {
  display: "clear"
}

function selectedDisplay (state = initialState, action) {
  switch (action.type) {
    case "SELECT_DISPLAY": 
      return action.display
    default:
      return state
  }
}

export default selectedDisplay