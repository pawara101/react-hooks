import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const EffectTutorial = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("Hi");
        axios
        .get("https://reqres.in/api/users?page=2")
        .then((response) => {
            setData(response.data.data)
            console.log(response.data);
        })
    },[]);
    return (
        <div>
            <h1>Students</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="List">
                        {item.first_name} {item.last_name} | email : {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );

}
