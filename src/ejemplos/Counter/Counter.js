import { useState , useEffect } from "react";

export const Counter = () => {

    const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })

    const incrementar = () => {
        setContador( {
            contador: contador.contador + 1,
            fyh: new Date()
        } )
    }
    
    useEffect(() =>{
        // console.log('Componente montado')
        
    },[])

    return (
        <div className='container my-5'>
            <h2>Cuento</h2>
            <hr/>
            <button className='btn btn-primary' onClick={incrementar}>CLICK ME</button>
            <hr/>
            <h4>{contador.contador}</h4>
            <p>FyH del ultimo click: {contador.fyh.toLocaleString()}</p>
        </div>
    )
}

