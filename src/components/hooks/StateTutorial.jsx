import React, {useState} from 'react';

export const StateTutorial = () => {
    const [counter, setCounter] = useState(0); // use state with initial value 0

    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    return (
        <>
        <div>
            <h1>Counter Value : {counter}</h1>
            <button onClick={increment}>Increase</button>
        </div>
        </>
    )
}
