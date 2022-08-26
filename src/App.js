import React from 'react';
import './App.css';
import FormStep from './FormStep';

function App() {
  
const [currentStep, currentStepSetter] = React.useState(0);

const images = {
  0:"https://assets.codepen.io/6060109/form-stage-1.png",
  1: "https://assets.codepen.io/6060109/form-stage-2.png",
  2: "https://assets.codepen.io/6060109/form-stage-3.png",
  3: "https://assets.codepen.io/6060109/form-stage-4.png  "
}
let step = currentStep;
let currentURL = images[step]


 return (
  <div className="container-div">
    <div className="form-div">
      <form >
        <FormStep currentStep = {currentStep} />
      </form>
   { currentStep < 3 &&
      <button onClick={()=>{currentStepSetter(currentStep + 1)}} type={currentStep===2? 'submit' : 'button'}>Next</button>      
   }
    </div>
    <div className='image-div' 
         style={{
             backgroundImage:'url('+ currentURL +')'
    }}>
        
    </div>
  </div>
  );



}

export default App;
