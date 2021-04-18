import React, { useState } from 'react'
import './counter.css'

const CouterApp = () => {
    const [state, setState] = useState({
        couter: 10,
        couter2: 20,
        couter3: 20,
        couter4: 20,
        couter5: 20,
      });
      const {couter, couter2} = state;

    // console.log({couter});

    return (
        <>
            <h1>Counter {couter}</h1>
            <h1>Counter {couter2}</h1>
            <hr/>
            <button className='btn btn-primary' onClick={()=>{
                setState({
                    ...state,
                    couter: couter+1,
                })
            }}>+1</button>
        </>
    )
}

export default CouterApp
