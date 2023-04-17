import "./App.css";
import React from "react";
import Player from "./components/player";
// import RollDice from './components/rollDice'
// import HoldDice from './components/holdDice'
import GameBoard from "./components/gameBoard";

class App extends React.Component {
  state = {
    player: ["Player 1", "Player 2"],
    totalScore: [0, 0],
    currentScore: [0, 0],
    randomImgNum1: 6,
    randomImgNum2: 6,
    isPlayer1: true,
    isPlayer2: false,
    border1: "red",
    border2: "red",
  };

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //////////////////////////////////////////////////////////////////////////////////

  handleDice = () => {
    let imgNum1 = this.getRandomIntInclusive(1, 6);
    let imgNum2 = this.getRandomIntInclusive(1, 6);
    this.setState({ randomImgNum1: imgNum1, randomImgNum2: imgNum2 });
    console.log(this.state.randomImgNum1);
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  substructOrSum = (total, current, index) => {
    console.log("bla"); //mutating the currscore array
    const totalArr = [...this.state.totalScore]; //mutating the totalscore array
    const currArr = [...this.state.currentScore];

    if (totalArr[index] === 100) {
      alert(`Player ${index + 1} has won!`);
      console.log(index);
    } else if (totalArr[index] > 100) {
      alert(`Game Over!`);
      console.log(index);
    } else if (
      this.state.randomImgNum1 === 6 &&
      this.state.randomImgNum2 === 6
    ) {
      currArr[index] = 0;
      this.setState({ currentScore: currArr });
      console.log(this.state);
    } else {
      let newCurrent =
        current + this.state.randomImgNum1 + this.state.randomImgNum2;
      currArr[index] = newCurrent;

      this.setState({ currentScore: currArr });
      console.log(this.state);
    }
  };

  ///////////////////////////////////////////////////////////////////
  handleClickRollDice = () => {
    console.log("yoohoo"); //on click rollDice
    if (this.state.currentScore[0] === 0 && this.state.currentScore[1] === 0) {
      const randomPlayer = this.pickAplayer();
      console.log(randomPlayer); //is working
      this.handleDice();

      if (randomPlayer === 1) {
        console.log("i'm true");
        this.setState({ isPlayer1: true, isPlayer2: false });
        this.substructOrSum(
          this.state.totalScore[0],
          this.state.currentScore[0],
          0
        );
      } else {
        console.log("i'm false");
        this.setState({ isPlayer1: false, isPlayer2: true });
        this.substructOrSum(
          this.state.totalScore[1],
          this.state.currentScore[1],
          1
        );
      }
      console.log(this.state.totalScore[0]);
      console.log(this.state.totalScore[1]);
    } else {
      this.handleDice();

      if (this.state.isPlayer1 && !this.state.isPlayer2) {
        this.substructOrSum(
          this.state.totalScore[0],
          this.state.currentScore[0],
          0
        );
      } else if (!this.state.isPlayer1 && this.state.isPlayer2) {
        this.substructOrSum(
          this.state.totalScore[1],
          this.state.currentScore[1],
          1
        );
      }
    }
  };

  ////////////////////////////////////////////////////////////////////////////////
  handleClickHoldDice = () => {
    //on clickhold dice
    const totalArr = [...this.state.totalScore];
    const currArr = [...this.state.currentScore];

    if (this.state.isPlayer1) {
      let newTotal = this.state.currentScore[0] + this.state.totalScore[0];
      totalArr[0] = newTotal;
      currArr[0] = 0;
      this.setState({ totalScore: totalArr, currentScore: currArr });
      this.setState({ isPlayer1: false, isPlayer2: true, border1: "red" });
    } else {
      let newTotal = this.state.currentScore[1] + this.state.totalScore[1];
      totalArr[1] = newTotal;
      currArr[1] = 0;
      this.setState({ totalScore: totalArr, currentScore: currArr });
      this.setState({ isPlayer1: true, isPlayer2: false, border2: "red" });
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  pickAplayer = () => {
    let random = this.getRandomIntInclusive(1, 2);
    return random;
  };
  //////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="container" style={{ display: "flex" }}>
        <div className="board-wrapper" style={{ display: "flex" }}>
          <Player
            border1={this.state.border1}
            isPlayer1={this.state.isPlayer1}
            player={this.state.player[0]}
            totalScore={this.state.totalScore[0]}
            currentScore={this.state.currentScore[0]}
          />
          <GameBoard
            handleClickRollDice={this.handleClickRollDice}
            handleClickHoldDice={this.handleClickHoldDice}
            imgNum1={this.state.randomImgNum1}
            imgNum2={this.state.randomImgNum2}
          />
          <Player
            border2={this.state.border2}
            isPlayer2={this.state.isPlayer2}
            player={this.state.player[1]}
            totalScore={this.state.totalScore[1]}
            currentScore={this.state.currentScore[1]}
          />
        </div>
      </div>
    );
  }
}

export default App;
