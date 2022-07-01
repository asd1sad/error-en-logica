import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
 
// import { useParams } from "react-router-dom";

 const ItemDetail = ( {item} ) => {
 
    const {addItem, isInCart} = useContext(CartContext)
 
    const [cantidad, setCantidad] = useState(0)
 
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        addItem(itemToCart)
    }
    return (

            <div>
                <h2>{item.nombre}</h2>
                <img src={item.img} alt={item.nombre}/>
                <p>{item.desc}</p>
                <h4>Precio: ${item.precio}</h4>  

                <hr/>
                {
                        isInCart(item.id)
                        ?   <Link to='/cart' className='btn btn-success my-3'>Terminar mi compra</Link>
                        :
                            <ItemCount
                            max={item.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            onAdd={handleAgregar}
                            />
                }
 
                <br/>
                <button onClick={handleVolver}>VOLVER</button> 
            </div>

    )
}

export default ItemDetail