import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingList, { MyButton } from './components/button'
import { Text } from './components/text'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userObject, setuserObject] = useState({name:"Oluwafeyisayomi", email: "email@gmail.com", age: 12})
  const [loginData, setloginData] = useState({ email: "", password: ""})

  function handleClick(name){
    alert(`Welcome, ${name}`);
    setuserObject({...userObject, name: name, age: 22})
    alert(``)
  }




  const [text, setText] = useState(true)

  function click(){
    setText(prevState => !prevState);
  }

  useEffect(() => {
    alert("welcome!!!")
  }, [text, count])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div onClick={() => handleClick("Feyi")}>
          <MyButton textContent="Sign Up" bgColor="blue" textColor="green"/>
          
          <MyButton textContent="Sign In" />
          
          <Text bgColor="gold"/>
        </div>

        <form action="">
          <input 
            type="email" 
            onChange={(e) => setuserObject({...userObject, email: e.target.value})}/>
          <input type="password" />
          
          <div onClick={() => handleClick("User")}>
            <MyButton textContent="login"/>

          </div>
        </form>

        <ShoppingList/>

        <div onClick={() => click()}>
          {text && <p>Better Turn Off</p>}
          <MyButton textContent={text ? "Off" : "On"} onClick={() => click()}/>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
