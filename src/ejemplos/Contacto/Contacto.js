import { useState } from "react"

export const Contacto = () => {

    const [values, setValues] = useState({
            nombre: '',
            email: '',
            direccion: ''
        })
        
    const handleInputChange = (e) =>{
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

        const handleSubmit = (e) => {
            e.preventDefault()
 
            // console.log("Submit del form")
            // console.log(values)
    }

    return (
         <div>
                <h2>Contacto</h2>
                <hr/>


                <form onSubmit={handleSubmit}>
                    <h4>Datos Personales</h4>

                    <input
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    placeholder="nombre"
                    type={'text'}
                    className='form-control my-2'
                    />

                    <input
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder="email"
                    type={'email'}
                    className='form-control my-2'
                    />

                    <input
                    name='direccion'
                    value={values.direccion}
                    onChange={handleInputChange}
                    placeholder="direccion"
                    type={'text'}
                    className='form-control my-2'
                    />

                    <button type='submit' className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
}
 
// useEffect(() =>{

//     const clicker = () => {
//         console.log('click detectado')
//     }

//     window.addEventListener('click', clicker)

//     return () => {
//         window.removeEventListener('click', clicker)
//     }
// }, [])