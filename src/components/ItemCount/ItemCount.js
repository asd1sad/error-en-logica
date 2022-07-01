import './ItemCount.scss'
 

export const ItemCount = ( {max, counter, setCounter ,onAdd} ) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }
    
    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }
    
    const btnRestarConfig = {
        onClick: handleRestar,
        className: `btn mx-1 ${counter === 0 ? 'btn-outline-danger' : 'btn-outline-primary'} ${counter === 1 ? 'min-value' : ''}`,
        disabled: counter === 0 
    }

    if (max === 0){
        return (  
            <div>
                <p>NO HAY STOCK</p>
            </div>
        )
    }

    return (
        
        <section className='cantidadProductos'>

         {/*    <button
             id='restarItem' 
             onClick={handleRestar} 
             className={`btn mx 1 ${counter === 0 ? 'btn-outline-danger' : 'btn-outline-primary'}`} 
             disabled={counter === 0}
             >
                -
            </button> */}
            <button {...btnRestarConfig}>
                -
            </button>
            <p>{counter}</p>

            <button 
            id='agregarItem' 
            onClick={handleSumar}
            className={`btn mx 1 ${counter === max ? 'btn-outline-danger' : 'btn-outline-primary'}`}
            disabled={counter === max}
             >
                +
            </button>

            <button  disabled={counter === 0} className='btn btn-success' onClick={onAdd}>Agregar al carrito</button>

        </section>
    )
}

