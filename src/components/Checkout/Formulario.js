import { Formik } from 'formik'
// import { Schema } from './Schema'


// const { schema } = Schema
// ! NO acepta la funcion generarOrden como funcion al parecer

export const Formulario = (generarOrden) => {

    return (
        <Formik
                initialValues={ {
                    nombre: '',
                    email: '',
                    direccion: ''
                } }
                // validationSchema={schema}
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
    )
}
