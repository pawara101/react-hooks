import React, { forwardRef, useImperativeHandle, useState } from "react";

export const Button = (props) => {
    const [toggle, setToggle] = useState(false);
    return(
        <>
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                Button From Child
            </button>
            {toggle && <h1>Toggle</h1>}
        </>
    );
};