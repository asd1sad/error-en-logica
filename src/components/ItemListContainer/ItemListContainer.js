import ItemList from "../ItemList/ItemList"  
import { Loader } from "../Loader/Loader"
import { useProductos } from "./useProductos"

 
export const ItemListContainer = () => {

    const { items, loading } = useProductos()

    return (
        <section className="container my-5">
            {
                loading
                ? <Loader/>

                :  <ItemList items={items}/>
            }
            
        </section>
    )
}


// pedirDatos()
// .then((resp) => {
//     if (!categoryId) {
//         setItems( resp )
//     } else {
//         setItems( resp.filter((item) => item.categoria === categoryId) )
//     }
// })
// .catch((error) => {
//     console.log('ERROR', error)
// })
// .finally(() => {
//     setLoading(false)
// })