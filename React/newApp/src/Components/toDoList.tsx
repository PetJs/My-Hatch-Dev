import React from 'react';
import {useState} from 'react';



export function ToDoList({bgColor}){

    const [list, setList] = useState('')

    return(
        <>
        <div>
            <input type="text" />
        </div>
        <div style={{backgroundColor: bgColor || "red"}}>
            <p>I want Ice-Cream</p>
        </div>  

        <div><br />
            <input type="text" onChange={e => setList(e.target.value)} />
            <ul>
                {list}
            </ul>
        </div>   
        </>

    )
}