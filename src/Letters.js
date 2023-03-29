import Letter from './Letter'
function Letters(props) {
    let letterStatus=props.letters
    let letterArray=Object.keys(letterStatus)
    let solutionLetter=props.select
    return(
    <div>
        {letterArray.map((lettr) => letterStatus[lettr] ? 
        <Letter select={solutionLetter} className="cross" letter={lettr} /> 
    : <Letter className="false" letter={lettr} select={solutionLetter} />)}
    </div>
    )
}

export default Letters;
