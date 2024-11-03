import {React, useEffect, useState} from 'react'
import { usePreviousProps } from '../hooks/custom_hooks/usePreviousProps.js'
// link : https://www.freecodecamp.org/news/how-to-create-custom-react-hooks/

export default function Tile({ value }) {
    const [scale, setScale] = useState(0);

    const previousValue = usePreviousProps(value);
    const hasChanged = previousValue !== value;

    useEffect(() => {
        if (hasChanged) {
            setScale(1.1)
            setTimeout(
                () => setScale(1),100
            )
        }
        }, [hasChanged, setScale]);

    const style ={
        transform: `scale(${scale})`,
    };

    return(
        <div className='tile' style={style}>
            {value}
        </div>
    )
}