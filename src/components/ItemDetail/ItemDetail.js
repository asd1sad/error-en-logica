import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useCounter } from '../../hooks/useCounter'
import { ItemSize } from "../ItemSize/ItemSize";
import { useSize } from "../../hooks/useSize";
 


const ItemDetail = ( {item} ) => {
 
    const { size } = useSize()
    const { addItem, isInCart } = useContext(CartContext)
     
// logicas en custom hook
    const { counter, increment , decrement } = useCounter()
   
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    
    const handleAgregar = () => {
        const itemToCart = { 
            ...item,
            cantidad: counter
        }

        addItem(itemToCart)
    }
    // { console.log(stock) }
    // { console.log(size) } 
    return (
            <div>
                <h2>{item.nombre}</h2>
                <img src={item.img} alt={item.nombre}/>
                <p>{item.desc}</p>
                <h4>Precio: ${item.precio}</h4> 

                
                 <ItemSize item ={item}/> 
                
             
            
                <hr/>
                {
                        isInCart(item.id)
                        ?   <Link to='/cart' className='btn btn-success my-3'>Terminar mi compra</Link>
                        :
                            <ItemCount
                            increment={increment}
                            decrement={decrement} 
                            handleAgregar={handleAgregar} 
                            counter={counter}
                            size={size}                          
                            />           
                }
  
                <br/>
                <button onClick={handleVolver}>VOLVER</button> 
    
            </div>
    )
}

export default ItemDetail