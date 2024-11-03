import React from "react";

export function SimpleComp(){
    // Destructure and Rename in One Step
    const user = { name: 'Alice', age: 25};
    const {name:userName, age: userAge} = user;

    // Optional Chaining with Function Calls
    const userNew = {
        getName: () => 'Trevors',
    }

    let count=23;
    count ||= 10; // logical OR assignment assign a value only if the varible is null or undefined or 0
    console.log(count);

    return(
        <div>
            <h1>1. Destructure and Rename in One Step</h1>
            <h2>{userName} is {userAge}</h2>
            <br/>
            <h1>2. Optional Chaining with Function Calls</h1>
            <h2>{userNew.getName?.()}</h2>
            {/*<h2>{userNew.getAge?.()}</h2>*/}
        </div>
    )
}