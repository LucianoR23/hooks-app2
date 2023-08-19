import { useState } from "react"


export const useCounter = ( initValue = 1 ) => {

    const [counter, setCounter] = useState( initValue )

    const increment = () => {
        setCounter( (current) => current + 1 )
    }
    const decrement = () => {
        setCounter( (current) => current - 1 )
    }
    const reset = () => {
        setCounter( initValue )
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}
