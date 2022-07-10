import { useSize } from "../../hooks/useSize";



export const ItemSize = ( {item} ) => {

    const { s, m , l } = useSize()
 
    return (
        <>
            {
                (item.stock === 0) ?
                ''
                :
                <>
                    <div className="sort_box">
                        <label htmlFor="sort-by" className="sort_by"> TALLE </label>
                        <select id="sort-by">
                            <option 
                            value= 'S' 

                            onClick={ s }
                            >S
                            </option>

                            <option
                            value= 'M' 
                            onClick={ m }
                            >M
                            </option>

                            <option
                            value= 'L' 
                            onClick={ l }
                            >L
                            </option>  
                        
                        </select>
                    </div>
                </>        
            }
                   
        </>
    )
 }