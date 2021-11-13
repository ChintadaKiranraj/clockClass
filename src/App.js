import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  showHideClock = () => {
    this.setState(prevSta => ({showClock: !prevSta.showClock}))
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.showHideClock}
        >
          {showClock ? 'HideClock' : 'ShowClock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
