import React from "react";
import { useState } from "react";


export function ShowNoOfChar() {

    const [inputValue, setInputValue] = useState("")
    
    const[text, setText] = useState(false)

    const inputChange = (e) => setInputValue(e.target.value)

    function click(){

        setText(prevState => !prevState)
    }

    return(
        <>
            <div>
                <h2>NUMBER 6 SOLUTION</h2>

                <input type="text" value={inputValue} onChange={inputChange}/>
                <button onClick={() => click()}>{text}Show Char</button><br />
                {text && <p>The Number of character typed is {inputValue.length}</p>}
            </div>
        </>
    )
}