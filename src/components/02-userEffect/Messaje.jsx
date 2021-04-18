import React, { useEffect, useState } from 'react'

export const Messaje = () => {

    const [coord, setcoord] = useState({x:20,y:50})

    useEffect(() => {
        console.log('Componente montado');
        const mousemove = (e) => {
            // const coords = {
            //     x:e.x,
            //     y:e.y
            // }
            setcoord({
                x:e.x,
                y:e.y
            })
           console.log(':D');
        }

        window.addEventListener('mousemove', mousemove)
        return () => {
            console.log('Componente Desmontado');
            window.removeEventListener('mousemove',mousemove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>Las coord son X {coord.x} y Y {coord.y}</p>
        </div>
    )
}
