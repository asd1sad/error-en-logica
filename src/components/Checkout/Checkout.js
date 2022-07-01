import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection ,getDocs ,addDoc , writeBatch, query , where , documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Formik } from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio parce')
                .min(3, 'El nombre es demasiado corto')
                .max(25, 'Maximo 25 caracteres'),
    email: Yup.string()
                .required('Este campo es obligatorio parce')
                .email('Formato invalido'),
    direccion: Yup.string()
                .required('Este campo es obligatorio parce')
                .min(5, 'La direccion es demasiado corta')
                .max(25, 'Maximo 25 caracteres'),           
})

export const Checkout = () => {
   

    const { cart , totalPrice, emptyCart } = useCartContext()
    
    const [orderId, setOrderId] = useState(null)
    

    const generarOrden = async (values) => {

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad , nombre, precio})),
            total: totalPrice()
        }
        
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos') 
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)
 
        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
 
            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordenesRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })          
        } else {
            console.log(outOfStock)
            alert(`Item sin stock: ${outOfStock}`)
            // alert('Item sin stock:' ,outOfStock)
        }
    }

    if (orderId) {
        return (
            <div className='container my-5'>
                <h2>Gracias por su compra</h2>
                <hr/>
                <p>Su numero de orden es : {orderId}</p>
            </div>
        )
    }  
    
    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={ {
                    nombre: '',
                    email: '',
                    direccion: ''
                } }
                validationSchema={schema}
                onSubmit={ generarOrden }
            >
                {formik => (
                      <form onSubmit={formik.handleSubmit}>
                            <input
                                value={formik.values.nombre}
                                name='nombre'
                                onChange={formik.handleChange}
                                type={'text'}
                                placeholder='Tu nombre'
                                className='form-control my-2'
                            />
                            {formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>}
                            <input
                                value={formik.values.email}
                                name='email'
                                onChange={formik.handleChange}
                                type={'text'}
                                placeholder='Tu email'
                                className='form-control my-2'
                            />
                             {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>}
                            <input
                                value={formik.values.direccion}
                                name='direccion'
                                onChange={formik.handleChange}
                                type={'text'}
                                placeholder='Tu direccion'
                                className='form-control my-2'
                            />
                             {formik.errors.direccion && <p className='alert alert-danger'>{formik.errors.direccion}</p>}

                      <button type='submit btn btn-primary'>Submit</button>

                  </form>
                )}  
            </Formik>


          
            <button className='btn btn-danger' onClick={emptyCart}>Cancelar mi compra</button>
        </div>
    )
} 

// cart.forEach((item) => {

//     const docRef = doc(db, 'productos', item.id)

  
// })   
// getDoc(docRef)
// .then((doc) => {
//     if((doc.data().stock - item.cantidad) >= 0){
//         updateDoc(docRef, {
//             stock: doc.data().stock - item.cantidad
//     })
// } else {
//     alert('No hay stock del producto: ' + item.nombre)
// }
// })


// ! Integrado en formik, no se hardcodea
// const [values, setValues] = useState({
    //     nombre: '',
    //     email: '',
    //     direccion: ''
    // })

    // const handleInputChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     })
    // }