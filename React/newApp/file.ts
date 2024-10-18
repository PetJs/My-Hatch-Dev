const useState = <T>(initialState: T) => {
    let state = initialState ?? undefined;
    function setState(newState) {
        state = newState;
    }
    return [state, setState] as [T , (newState:T) => void]
}

const [state, setState] = useState("David")
console.log(state)

setState("")

