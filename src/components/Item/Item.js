import './Item.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Item = ( {item} ) => {

// logica
const [isHovering, setIsHovering] = useState(false)
 
function crossClass(){
    return ` ${ isHovering ? 'img2_hidden' : '' } `
}  

    return (
        <div className="item">
 
            <h2>{item.nombre}</h2>

            <img  onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=> setIsHovering(false)} src={item.img} alt={item.nombre}/>
            <img  className={crossClass()} src={item.img2} /> 
 
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
          
            <Link to={`/item/${item.id}`}>
               <button className="btn btn-primary">Click for more</button>
            </Link>
          
        </div>
    )
}

export default Item