import { useEffect } from 'react'
import { useSize } from '../../hooks/useSize'
import './ItemCount.scss'
import { NoStock } from './NoStock'
 
export const ItemCount = ( {increment, decrement, handleAgregar, counter, size } ) => {

 const { stock } = useSize()
 { {console.log(stock)} }

    useEffect(()=> {
     
        { {console.log(stock)} }

        if (stock === 0) return <NoStock/>    
        if (stock === 10) return console.log('auchours')      
    },[size])

 



    return (
        
        <section className='cantidadProductos'>
            {console.log(stock)} 

            <button 
            {...decrement}>
                -
            </button>

            <p>{counter}</p>
 
            <button 
            onClick={increment}
            className={`btn mx 1 ${counter === stock ? 'btn-outline-danger' : 'btn-outline-primary'}`}
            disabled={counter === stock}
             >
                +
            </button>

            <button  disabled={counter === 0} className='btn btn-success' onClick={handleAgregar}>Agregar al carrito</button>

        </section>
    )
}
 
// pasa valor o letra