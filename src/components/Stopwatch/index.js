// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 60, secondsPassed: 0}

  startTimer = () => {
    this.setState(prevState => ({secondsPassed: prevState.secondsPassed + 1}))
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  onStart = () => {
    const {time, secondsPassed} = this.state
    const timerCompleted = time === secondsPassed

    if (!timerCompleted) {
      this.timerId = setInterval(this.startTimer, 1000)
    } else {
      this.clearTimerInterval()
    }
  }

  onStop = () => {
    this.clearTimerInterval()
  }

  onReset = () => {
    this.setState({secondsPassed: 0})
    this.clearTimerInterval()
  }

  render() {
    const {secondsPassed} = this.state

    const displayTime = secondsPassed > 9 ? secondsPassed : `0${secondsPassed}`

    return (
      <div className="bgContainer">
        <div className="bodyContainer">
          <h1 className="mainHeading">Stopwatch</h1>
          <div className="cardContainer">
            <div className="timerText">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer">00:{displayTime}</h1>
            <div className="buttonContainer">
              <button
                type="button"
                className="button green"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button red"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button yellow"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
