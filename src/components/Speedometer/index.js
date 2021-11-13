// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        console.log(`previous state is ${prevState.count}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => {
        console.log(`previous state is ${prevState.count}`)
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="speed-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speed-img"
          />
        </div>
        <h1 className="speed-count">Speed is {count}mph</h1>
        <p className="speed-count">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="button-container">
          <button
            className="apply-button"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
