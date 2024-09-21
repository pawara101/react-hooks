import React, { useLayoutEffect, useEffect, useRef } from 'react';

export const LayoutEffectTutorial = () => {
    const inquirer = useRef(null);

    useLayoutEffect(() => {
        console.log("LayoutEffectTutorial");
    }, []);

    useEffect(() => {
        console.log("EffectTutorial");
        inquirer.current.value = "Effect"
    })
    return(
        <>
            <input ref={inquirer} value={"Input Here"} />
        </>
    )
}