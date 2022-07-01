import * as Yup from 'yup';

export const Schema = () => {

Yup.object().shape({
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
}