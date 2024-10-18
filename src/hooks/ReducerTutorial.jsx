import React, { useReducer } from 'react';
// check link : https://youtu.be/6wf5dIrryoQ?t=6492
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1, showText: state.showText };
        case 'toggleShowText':
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

export const ReducerTutorial = () => {  // Capitalized the component name
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT' });
                    dispatch({ type: 'toggleShowText' });
                }}
            >
                Click Here
            </button>
            {state.showText && <p>This an Even Value</p>}
        </div>
    );
};
