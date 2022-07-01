import './Container.scss'

export const Container = ( {children} ) => {

    return (
        <div className="my-container">
            {children}
            <h3>Componente Container</h3>    
        </div>
    )
}

 