import React, {useState} from 'react';


export const StateTutorial = () => {
    const [text, setText] = useState(0);
    const [counter, setCounter] = useState(0); // Initialize counter with a default value

    const setvalue = () => {
        const intVal = parseInt(text, 10); // Convert the input value to an integer
        setCounter(intVal); // Set counter to the input value
        console.log("Input Value:",intVal);
    }

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1); // Use the functional form to update the counter
        console.log(counter + 1); // Log the incremented value
    }

    return (
        <>
            <div>
                <div>
                    <h2>Start Value</h2>
                    <input placeholder="Enter Value" onChange={e => setText(e.target.value)} value={text}/>
                    <button onClick={setvalue}>Set Value</button>
                </div>
                <h1>Counter Value: {counter}</h1>
                <button onClick={increment}>Increase</button>
            </div>
        </>
    )
}



