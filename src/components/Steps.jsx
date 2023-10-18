import React, { useState } from 'react'
import './Steps.css'


// const AnimalButton = ({ name }) => {
    
//     const [ btnIsActive, setBtnIsActive ] = useState(false);
    
//     function animalEntrance(name) {
//         console.log(`${name} Clicked`)
//         setBtnIsActive(!btnIsActive);
//     }

//     //toggle duck's visibility

//     return (
//             <button
//                 className={ btnIsActive ? "active" : "inactive" }
//                 onClick={ () => animalEntrance(name) }
//                 >{name}
//             </button>
//     )
// }

const DuckButton = () => {
    const [ duckBtnIsActive, setDuckBtnIsActive ] = useState(false);
    function duckEntrance() {
        !duckBtnIsActive ? (alert('Duckie is Here!')) : (console.log('duck button deactivated'));

        setDuckBtnIsActive(!duckBtnIsActive);

    }

    return (
        <button
            className={ duckBtnIsActive ? "duckBtn active" : "duckBtn inactive" }
            onClick={ () => duckEntrance() }
        > Duck
        </button>
    )
}



const Steps = ( { doorIsClosed, duckIsVisible, setDuckIsVisible, cowIsVisible, setCowIsVisible } ) => {

    //if button is active, then show animal; if button is inactive, hide animal

  return (
    <div className="step-container">
        <div className="steps">
            
          { doorIsClosed ? 
                <div>
                    <p>Click on barn doors</p>
                </div>
                : 
                <div>
                    <p>Which animal do you want to come out?</p>
                    
                    <DuckButton 
                        name="Duck"
                    />
                    
                    {/* <AnimalButton 
                        name="Cow"
                        cowIsVisible={ cowIsVisible }
                        setCowIsVisible={ setCowIsVisible }
                    /> */}
                    
                </div>
          }  

        </div> 
    </div>
  )
}

export default Steps