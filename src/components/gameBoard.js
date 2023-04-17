import React from "react";
// import pic from '../assets/dice-1.png'; // with import
// const pic = require('../assets/'); // with import

class GameBoard extends React.Component {
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="gameBoard" style={{ marginTop: "5rem" }}>
        <button onClick={this.refreshPage} style={{ fontFamily: "diloWorld" }}>
          New Game
        </button>
        <img
          style={{ width: 50, height: 50, border: "1.5px solid black" }}
          src={`./assets/dice-${this.props.imgNum1}.png`}
        />
        <img
          style={{ width: 50, height: 50, border: "1.5px solid black" }}
          src={`./assets/dice-${this.props.imgNum2}.png`}
        />
        <button
          style={{
            fontFamily: "diloWorld",
            border: "1.5px solid black",
            padding: "5px",
          }}
          onClick={() => this.props.handleClickRollDice()}
        >
          Roll Dice
        </button>
        <button
          style={{
            fontFamily: "diloWorld",
            border: "1.5px solid black",
            padding: "5px",
          }}
          onClick={() => this.props.handleClickHoldDice()}
        >
          Hold Dice
        </button>
        <div
          style={{
            border: "1px solid",
            width: "5rem",
            textAlign: "center",
            fontSize: "15px",
          }}
        >
          100
        </div>
      </div>
    );
  }
}

export default GameBoard;
