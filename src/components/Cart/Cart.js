import { useCartContext } from "../../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { EmptyCart } from "./EmptyCart"
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cart, totalPrice,emptyCart, removeItem} = useCartContext()
     

    if (cart.length === 0) return <EmptyCart/>

    return (
        <div>   
            <h2>Tu Compra</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} className='my-2'>
                    <h4>{item.nombre}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={()=> removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                </div>
                ))
            }
    

            <h4>TOTAL: ${totalPrice()}</h4>

            <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
            <Link to='/checkout' className="btn btn-success">Checkout</Link>
        </div>
    )
}

 

