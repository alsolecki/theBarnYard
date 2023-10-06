import './Directions.css'

const Directions = ( { setDirectionStep, directionStep, door } ) => {

  if(door) {
    setDirectionStep(1)
  }

  if(!door) {
    setDirectionStep(2);
  }



  if(directionStep === 1) {
  return ( 
    <div className="directions">
        <div className="direction-box1">
        
            <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 96 22" 
                  strokeWidth={2.0} 
                  stroke="magenta" 
                  className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
            <p>Click on the barn doors to call an animal</p>

        </div>
    </div>
  )} else if (directionStep === 2) {
    return ( 
      <div className="directions">
          <div className="direction-box2">
              <div className="eggbox">
                <div className="egg"
                    onClick={()=>{alert("It is Duckie!")}}
                    >A</div>
                <div className="egg"
                    onClick={()=> {alert("It is Cowie!")}}
                    >B</div>
                <div className="egg"
                    onClick={()=>{alert("It is Piggie!")}}
                    >C</div>
              </div>
              <p>Which animal should come out?</p>
          </div>
      </div>)
  } else if (directionStep === 3) {
    return ( 
      <div className="directions">
          <div className="direction-box1">
              <p>It's Duckie!</p>
          </div>
      </div>)
    } else {
    return (
      <>
      </>
    )
  }
}

export default Directions
