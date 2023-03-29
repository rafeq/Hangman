import './App.css';
import React, { useState } from 'react';
import Score from './Score'
import Solution from './Solution'
import Letters from './Letters'


function generateLetterStatuses() {
  let letterStatus = {}
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false
  }
  return letterStatus
}


function App() {
  let [letterStatus,setLetterStatus]=useState(generateLetterStatuses())
  let  solution= useState({word:"STRING",hint:"String"})
  let [score,setScore]=useState(100)

  const scoreUpdate=()=>{
    setScore(score-=10)
    console.log(score);

  }
  const selectedLetter=(letter)=>{
    if (solution[0].word.includes(letter)) {
      letterStatus[letter] = true;
      setLetterStatus({ ...letterStatus, [letter]: true });
    } else{
      scoreUpdate()
    }
  }

 // console.log(letterStatus);
  return (
    <div className="App">
      <header className="App-header">
      <Score score={score}/>
      <Solution sol={solution[0].word} letters={letterStatus} update={scoreUpdate} />
      <Letters letters={letterStatus} select={selectedLetter} />
      </header>
    </div>
  );
}


export default App;
/*
<Letters>
    <Letter></Letter><Letter></Letter>
    .... //Eventually we will display all the available letters here: A - Z
  </Letters> 
  */