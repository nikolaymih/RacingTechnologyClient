import * as Yup from 'yup';

const createProductSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Too short!')
        .required('Required'),
    image: Yup.string()
        .min(1, 'Too short!')
        .required('Required'),
    price: Yup.number()
        .min(1, 'Price can not be less than 1')
        .required('Required')
})

export default createProductSchema;

export type CreateProductInput = Yup.TypeOf<typeof createProductSchema>;