import Item from "../Item/Item"
import './ItemList.scss'


const ItemList = ( {items} ) => {

    return (
        <div className="contenedorProductos">
            {
                items.map((item) => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList

 