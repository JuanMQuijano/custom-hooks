import { useState } from "react"

const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increaseCounter = (value = 1) => {
        setCounter(counter + value)
    }

    const decreaseCounter = (value = 1) => {
        if (counter === 1) return;
        setCounter(counter - value)
    }

    const resetCounter = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increaseCounter,
        decreaseCounter,
        resetCounter
    }
}

export default useCounter