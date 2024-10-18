import React from "react";
import { useState } from "react";


export function ShowColor() {
    const [color, setColor] = useState(getRandomColor)
    const [message, setMessage] = useState("")

    function getRandomColor(): string {
        // Generate random values for red, green, and blue components
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
      
        // Convert the RGB values to a hexadecimal string
        const hexR = r.toString(16).padStart(2, '0');
        const hexG = g.toString(16).padStart(2, '0');
        const hexB = b.toString(16).padStart(2, '0');
      
        // Concatenate the hexadecimal values to get the final color string
        return `#${hexR}${hexG}${hexB}`;
      }

      function click() {
        setColor(getRandomColor())
        setMessage(`The value of the colour is ${getRandomColor()}`)
      }
      

      
    return(
        <>
            <div style={{background: color}}>
                <h2>NUMBER 4 SOLUTION</h2>

                <button onClick={() => click() }>
                    CLICK BUTTON TO CHANGE COLOUR
                </button>
                <p>{message}</p>

            </div>
        </>
    )
}