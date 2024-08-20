

export function Text({bgColor}){
    return(
        <>
        <div>
            <input type="text" />
        </div>
        <div style={{backgroundColor: bgColor || "red"}}>
            <p>I want Ice-Cream</p>
        </div>     
        </>

    )
}
