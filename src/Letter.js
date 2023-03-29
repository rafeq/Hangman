import React from 'react'
function Letter(props){

    let letter = props.letter
    let selectedLetter=props.select
    let className = props.selectedLetter
    return (
      <span onClick={()=>{selectedLetter(props.letter)}} className={className}>{letter+" "} </span>
    )
  }
  export default Letter;
