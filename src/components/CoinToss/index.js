import './index.css'
import {Component} from 'react'

const tossImages = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {
    tossResult: 0,
    count: 0,
    heads: 0,
    tails: 0,
  }

  flipToss = () => {
    const {count, heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)
    const totalCount = count + 1
    let headsCount = heads
    let tailsCount = tails
    if (toss) {
      tailsCount = tails + 1
    } else {
      headsCount = heads + 1
    }

    this.setState({
      tossResult: toss,
      count: totalCount,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {tossResult, count, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="toss-bg-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="option-heading">Heads (or) Tails</p>
          <img
            className="toss-img"
            src={tossImages[tossResult]}
            alt="toss result"
          />
          <button onClick={this.flipToss} className="toss-btn" type="button">
            Toss Coin
          </button>
          <div className="toss-stats">
            <p className="toss-stat">Total: {count}</p>
            <p className="toss-stat">Heads: {heads}</p>
            <p className="toss-stat">Tails: {tails}</p>
          </div>
          <p className="toss-stat">Result : {tossResult ? 'Tails' : 'Heads'}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
