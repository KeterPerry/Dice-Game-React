import React from "react";

function Player({ player, totalScore, currentScore }) {
  return (
    <div className="player">
      <h1>{player}</h1>
      <div>
        <div>Total Score</div>
        <div
          style={{
            border: "2px solid red",
            width: "8rem",
            height: "8rem",
            fontSize: "3rem",
          }}
        >
          {totalScore}
        </div>
      </div>

      <div>
        <div>Curent Score</div>
        <div
          style={{
            border: "2px solid red",
            width: "8rem",
            height: "20rem",
            fontSize: "3rem",
          }}
        >
          {currentScore}
        </div>
      </div>
    </div>
  );
}

export default Player;
