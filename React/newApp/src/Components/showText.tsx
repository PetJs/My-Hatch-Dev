import React from "react";
import { useState } from "react";

export function Text() {
    const[text, setText] = useState(true)

    function click(){
        setText(prevState => !prevState)
    }


    return(
        <>
            <div>
                {text && <h2>NUMBER 2 SOLUTION</h2>}
                <button onClick={() => click()}>{text ? "Hide Text" : "Show Text"}</button>

            </div>
        </>
    )
}