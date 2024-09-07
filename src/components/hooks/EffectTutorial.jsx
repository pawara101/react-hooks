import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const EffectTutorial = () => {
    const [data, setData] = useState([]);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        console.log("Hi");
        axios
        .get("https://reqres.in/api/users?page=2")
        .then((response) => {
            setData(response.data.data)
            console.log(response.data);
        })
    },[]);

    const getNames = () => {
        console.log("Get Names");
        setClicked(true)
    };
    return (
        <div>
            <h1>Students</h1>
            <button onClick={() => getNames()}>Names</button>
            {clicked && <ul>
                {data.map((item, index) => (
                    <li key={index} className="List">
                        {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>}

        </div>
    );

}
