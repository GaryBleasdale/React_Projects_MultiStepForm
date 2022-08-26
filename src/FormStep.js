import React from "react";

export default function FormStep(props){
  const [selected, setSelected] = React.useState(0)

  

  if (props.currentStep ===0){
    return(
    <div className="step">
      <label>Apply to Work with our Agency</label>
      <input type="email" placeholder="What's your email?"
      />
   </div>

    )
  } else if (props.currentStep ===1){
    return(
   <div className="step-large">
    <label>What's your budget?</label>
    <div className="radio-container"> 
    <div className="step-radio"
    >
      <label style={{
        backgroundColor: selected===0 ? 'white' : '',
        color:  selected===0 ? '#745E5E' : '',
      }}>$2k</label>
      <input type="radio" name='budget' id="2k" onChange={()=>{setSelected(0)}}/>
      </div>
    <div className="step-radio">
        <label style={{
        backgroundColor: selected===1 ? 'white' : '',
        color:  selected===1 ? '#745E5E' : '',
       
      }}>$5k</label>
        <input type="radio" name='budget' id="5k" onChange={()=>{setSelected(1)}} />
        </div>
    <div className="step-radio">
        <label style={{
        backgroundColor: selected===2 ? 'white' : '',
        color:  selected===2 ? '#745E5E' : '',
       
      }}>&infin; </label>
        <input type="radio" name='budget' id="none" onChange={()=>{setSelected(2)}}/>
      </div>
    </div> 
    </div>
    )
  } else if (props.currentStep ===2){
    return(
    <div className='step'>
      <label>Anything else we should know?</label>
      <input type="text" />
      </div>
    ) 
  } else  {
    return (
      <h2>Thank you!</h2>   
    )
  }
}
  