import React from 'react'
import Letter from './Letter'
function Solution(props) {
    let solution = props.sol
    let word = solution.split("")
    let letterStatus=props.letters
    return(
        <div>
            {word.map((lettr)=> letterStatus[lettr] ? <Letter letter={lettr}/>: <Letter letter={"_"}/>)}
        </div>
    )
  }

  export default Solution;
