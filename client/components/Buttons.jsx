import React from "react";
import {connect} from "react-redux"
import {keyToState, toneToState, qualityToState, fretDisplayToState} from "../actions"

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = this.defaultState.bind(this)
  }

  componentDidMount(){

// ---- Event listeners to trigger redux action on click
    let keyClass = document.getElementsByClassName("key")
    for (let i = 0; i < keyClass.length; i++) {
      keyClass[i].addEventListener("click", (x) => {
        this.props.dispatch(keyToState(x.target.value))
        this.defaultState()
      })
    }

    let toneClass = document.getElementsByClassName("tone")
    for (let i = 0; i < toneClass.length; i++) {
      toneClass[i].addEventListener("click", (x) => {
        this.props.dispatch(toneToState(x.target.value))
        this.defaultState()
      })
    }

    let qualityClass = document.getElementsByClassName("quality")
    for (let i = 0; i < qualityClass.length; i++) {
      qualityClass[i].addEventListener("click", (x) => {
        this.props.dispatch(qualityToState(x.target.value))
        this.defaultState()
      })
    }

    let fretboardDisplay = document.getElementsByClassName("fretboard-tone")
    for (let i = 0; i < fretboardDisplay.length; i++) {
      fretboardDisplay[i].addEventListener("click", (x) => {
        this.props.dispatch(fretDisplayToState(x.target.value))
      })
    }
  }

defaultState() {
  if (!this.props.selectedChord.selectedKey) this.props.dispatch(keyToState("C"))
  if (!this.props.selectedChord.selectedTone) this.props.dispatch(toneToState(""))
  if (!this.props.selectedChord.selectedQuality) this.props.dispatch(qualityToState("maj"))
}

render() { 
  return (
  <div className="keyChordContainer">
{/* <div id="sandbox">sandbox</div> */}

  <div className="row">
    <div id="chord-display">
      {<p><strong>Selected Chord:</strong>
      {this.props.selectedChord.selectedKey}
      {this.props.selectedChord.selectedTone}
      {this.props.selectedChord.selectedQuality}
      </p>}
    </div>

    <div id="note-display">
      <p><strong>Chord Notes:</strong> <span id="note-display-text"></span></p>
    </div>
  </div>

  <div className="display-selection">
    <h4>Display sharps or flats:</h4>
      <button className="fretboard-tone" type="button" value="sharps">#</button>
      <button className="fretboard-tone" type="button" value="flats">b</button>
      <button className="fretboard-tone" type="button" value="clear">clear</button>
  </div>

  <div className="chord-selection">
    <h2>Select chord:</h2>
      <div className="chord-buttons-row">
        <div className="key-row">
          <button className="key" type="button" value="C">C</button>
          <button className="key" type="button" value="D">D</button>
          <button className="key" type="button" value="E">E</button>
          <button className="key" type="button" value="F">F</button>
          <button className="key" type="button" value="G">G</button>
          <button className="key" type="button" value="A">A</button>
          <button className="key" type="button" value="B">B</button>
        </div>
      </div>

      <div className="chord-buttons-row">
        <div className="tone-row">
          <button className="tone" type="button" value="#">#</button>
          <button className="tone" type="button" value="b">b</button>
          <button className="tone" type="button" value="">natural</button>
        </div>
      </div>

      <div className="chord-buttons-row">
        <div className="quality-row">
          <button className="quality" type="button" value="maj">maj</button>
          <button className="quality" type="button" value="m">min</button>
          <button className="quality" type="button" value="7">7</button>
          <button className="quality" type="button" value="maj7">maj7</button>
          <button className="quality" type="button" value="m7">min7</button>
          <button className="quality" type="button" value="dim">dim</button>
          {/* <button className="quality" type="button" value="dim7">dim7</button> */}
          <button className="quality" type="button" value="aug">aug</button>
          {/* <button className="quality" type="button" value="sus2">sus2</button> */}
          {/* <button className="quality" type="button" value="sus4">sus4</button> */}
          {/* <button className="quality" type="button" value="6">6</button>
          <button className="quality" type="button" value="11">11</button>
          <button className="quality" type="button" value="m11">m11</button> */}
        </div>

      </div>
    </div>
  </div>
  )
}
}

function mapStateToProps(state) {
  return {
    selectedChord: state.selectedChord,
    selectedDislpay: state.selectedDislpay
  }
}

export default connect(mapStateToProps)(Buttons)