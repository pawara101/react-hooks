//useCallback lets  cache a function definition between re-renders
import React, { useState } from 'react';

export function CallbackTutorial() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>CallBack</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}