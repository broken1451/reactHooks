import React, { useState } from 'react'
import MultipleCustomHooks from '../03-useFetch/MultipleCustomHooks';
import "../02-userEffect/effect.css";

export const RealExampleRef = () => {

    const [show, setshow] = useState(false)

    const handleShow =()=>{
        setshow(!show)
    }

    return (
        <div>
            <h1>RealExampleRef </h1>
            <hr/>

            {show ? <MultipleCustomHooks /> : null}

            <button onClick={handleShow} className='btn btn-primary mt-5' type="button">Show/Hide</button>
        </div>
    )
}
