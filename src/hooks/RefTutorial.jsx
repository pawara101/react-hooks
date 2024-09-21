import React, { useRef } from "react";

// Manipulate Dom tell our browser to focus on input
export const RefTutorial = () => {
    const inputRef = useRef(null);
    const ChangeName = () => {
        console.log(inputRef.current.value); // Use inputRef.current.value to access the value.
        inputRef.current.focus();
        // inputRef.current.value = ""; // to clear
    }
    return(
        <>
            <h1>Pedro Olange</h1>
            <input type="text" placeholder="Enter Name" ref={inputRef}/>
            <button onClick={ChangeName}>Change Name</button>
        </>
    )
}
