import { Link } from 'react-router-dom'

export const EmptyCart = () => {
    
    return (
        <div>
            <h2>Tu carrito esta vacio</h2>
            <hr/>
            <Link to='/' className="btn btn-primary">Ir a comprar</Link>
        </div>
    )
}