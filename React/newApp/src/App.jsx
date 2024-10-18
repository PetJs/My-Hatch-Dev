import {useState} from 'react';
import { ToDoList } from './Components/toDoList';
import { Text } from './Components/showText';
import './App.css'
import { ShowColor } from './Components/changeColor';
import { ShowNoOfChar } from './Components/noOfChar';

function App() {
  //let myName = "David";

  const [myName, setmyName] = useState("");

  const [count, setCount] = useState(0);

  const [step, setStep] = useState(0)

  const click = () => {
    setCount(count + parseInt(step))
  }

  const reduceCount = () => {
    setCount(count - parseInt(step))
  } 
  return (
    <>
     
     <p>Counter {count}</p>

    <div> 
      Enter the value of your Step: 
      <input type="text" onChange={e => setStep(e.target.value)} />
    </div>
     
    
    <div>
      <button onClick={() => click()}>Click Me to increase</button>
      
      <button onClick={() => reduceCount()}>Click Me to Reduce</button>
    </div><br />

    
    <Text/><br />

    <div>
      <h2>NUMBER 3 SOLUTION</h2>
      <h3>Hello {myName}</h3> 
      <input type="text" placeholder='Input Text' onChange={e => setmyName(e.target.value)} /> 
    </div><br />

    <ShowColor/><br />
    <ShowNoOfChar/>


      
    <ToDoList/>


    
     
    </>
  )
}

export default App
