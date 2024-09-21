import React, {useMemo, useState} from 'react';
/*
* UseMemo : to stop re-rendering when clicking Counter ++ button
* for performance concerns
* */
export function MemoTutorial() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNum(num){
        console.log(`Calculation Done`);
        return Math.pow(num, 3)
    }

    const result = useMemo(()=>{return cubeNum(number)}, [number])
    return (
        <>
        <input type= "number" onChange={ (e)=> {setNumber(e.target.value)}}/>
            <h1>Cube of Number : {result}</h1>
            <button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
            <h1>Counter {counter}</h1>
        </>
    )
}
