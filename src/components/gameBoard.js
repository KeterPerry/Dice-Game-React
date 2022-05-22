import React from 'react';
// import pic from '../assets/dice-1.png'; // with import
// const pic = require('../assets/'); // with import

class GameBoard extends React.Component {

  refreshPage() {
    window.location.reload(false);
  }
    
    render(){
      return(
        <div className="gameBoard">
           <button onClick={this.refreshPage} style={{fontFamily: 'diloWorld'}}>New Game</button>
           <img style={{width: 50, height: 50}} src={`./assets/dice-${this.props.imgNum1}.png`}/>
           <img style={{width: 50, height: 50}} src={`./assets/dice-${this.props.imgNum2}.png`}/>
           <button style={{fontFamily: 'diloWorld'}} onClick={()=> this.props.handleClickRollDice()}>Roll Dice</button>
           <button 
            style={{fontFamily: 'diloWorld'}}
            onClick={()=> this.props.handleClickHoldDice()}>Hold Dice</button>
           <div style={{border: '1px solid', width: "5rem", textAlign: 'center'}}>100</div>     
        </div>
      )
      
     
    }
  
  }
    
  
  export default GameBoard;







 
  
