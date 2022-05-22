// imgArray:[
//     {src: './assests/dice-1.png', title: "pic 1"},
//     {src: './assests/dice-2.png', title: "pic 2"},
//     {src: './assests/dice-3.png', title: "pic 3"},
//     {src: './assests/dice-4.png', title: "pic 4"},
//     {src: './assests/dice-5.png', title: "pic 5"},
//     {src: './assests/dice-6.png', title: "pic 6"},
// ]

//   state =   { player: ["Player 1", "Player 2"], 
//              totalScore: [0, 0], 
//              currentScore: [0, 0], 
//              randomImgNum1: 6, 
//              randomImgNum2: 6,
//               isPlayer1: "",
//               isPlayer2="", 
//               boarder1="red", 
//               border2="red"}

// handleClickRollDice =()=>{    //on click rollDice

//   if (this.state.currentScore[0]===0 && this.state.currentScore[1]===0)  {
//   const randomPlayer= pickAplayer()
//   handleDice()
//   randomPlayer===1?  this.setState({isPlayer1:true,isPlayer2:false}) && substruct0rSum(this.state.toatalScore[0], this.state.currentScore[0], 0):
//   this.setState({isPlayer1:false,isPlayer2:true})&& substruct0rSum(this.state.toatalScore[1], this.state.currentScore[1], 1);
//   }
//   else{
//     if(isPlayer1&& !isPlayer2){
//       substruct0rSum(this.state.toatalScore[0], this.state.currentScore[0], 0)
//     }
//     else if (!isPlayer1&& isPlayer2){
//       substruct0rSum(this.state.toatalScore[1], this.state.currentScore[1], 1);
//     }

//   }
// }


//   handleClickHoldDice =()=>{  //on clickhold dice
//     if (isPlayer1)
//       this.setState({isPlayer1:false,isPlayer2:true, border1:"red"})
//     else
//       this.setState({isPlayer1:true,isPlayer2:false, border2:"red"})

//   }

//////////////////////////////////////////////////////////////////////////////////////////////
  // pickAplayer=()=>{
  //   {let random= this.getRandomIntInclusive(1, 2);
  //     return random;
  //   }
  /////////////////////////////////////////////////////////////////////////////////


  substructOrSum=(total, current, index)=>{
    let totalArr=[...this.state.currentScore]
   
   
      if (totalArr[index]===100)       {  
      alert(`Player ${index+1} has won!`);
      console.log(index)
      }

      else if(randomImgNum1===6 &&randomImgNum2===6){
        totalArr[index]=0;
        this.setState({totalScore: totalArr[index]});
        console.log(this.state)   
      }

      else{
       let currArr=[...this.state.currentScore]  
       let current= randomImgNum1+randomImgNum2;
       currArr[index]=current
       let total= current+ total;
       totalArr[index]=total;
       this.setState({currentScore:currArr[index], totalScore: totalArr[index]});
       console.log(this.state)

      }
  }
  substructOrSum(5, 3, 0);



