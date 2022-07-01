import { useState , useEffect } from "react";

export const Counter = () => {

    const [contador, setContador] = useState({
        contador: 1,

    })
    const restar = () => {
        setContador( {
            contador: contador.contador - 1,
         
        } )
    }
    const incrementar = () => {
        setContador( {
            contador: contador.contador + 1,
        
        } )
    }
    
    useEffect(() =>{
        // console.log('Componente montado')
        
    },[])

    return (
        <div className='container my-5'>
            <h2>Cuento</h2>
            <hr/>
            <button className='btn btn-primary' onClick={restar}>-</button>
            <button className='btn btn-primary' onClick={incrementar}>+</button>
            <hr/>
            <h4>{contador.contador}</h4>

        </div>
    )
}