//useCallback lets  cache a function definition between re-renders
import React, {useCallback, useState} from 'react';
import { Header } from '../components/Header';
export function CallbackTutorial() {
    const [count, setCount] = useState(0);
    const newFN = useCallback(()=>{},[]) // creates the cached function.
    return (
        <>
            <Header newFN={newFN}></Header>
            <h1>{count}</h1>
            <button onClick={() => setCount(count=>count + 1)}>Add</button>
        </>
    );
}