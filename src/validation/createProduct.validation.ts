import * as Yup from 'yup';

const createProductSchema = Yup.object({
    title: Yup.string()
        .min(3, 'Too short!')
        .required('Required'),
    image: Yup.string()
        .min(1, 'Too short!')
        .required('Required'),
    price: Yup.number()
        .min(1, 'Price can not be less than 1')
        .required('Required'),
    model: Yup.string()
        .min(3, 'Model should not be less tha 3 characters')
        .required('Required'),
    category: Yup.string()
        .min(3, 'Category should be at least 3 characters')
        .required('Required'),
})

export default createProductSchema;

export type CreateProductInput = Yup.TypeOf<typeof createProductSchema>;