import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMountCalled')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('component will unmount is called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    console.log('render method is called')
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
