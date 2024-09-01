import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const EffectTutorial = () => {
    const [data, setData] = useState()
    useEffect(() => {
        console.log("Hi");
        axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            setData(response.data.title);
        })
    });
    return(
        <div>Hello World!!</div>
    )
}
