import './CreateProduct.css'

import React from "react";
import {useFormik} from 'formik';
import Product from "../../../interfaces/product.interface";
import createProductSchema from "../../../validation/createProduct.validation";
import {createProductService} from "../../../service/product.service";
import {useNavigate} from "react-router-dom";
import {notifyError, notifySuccess} from "../../../utils/notifiers";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CreateProduct: React.FC = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: '',
            model: '',
            image: '',
            price: 0,
            category: '',
            description: ''
        },
        validationSchema: createProductSchema,
        onSubmit: async (values: Product) => {
            try {
                console.log(values);
                await createProductService(values);
                notifySuccess('Successfully created product');
                navigate('/');
            } catch (e: unknown) {
                if (e instanceof Error) {
                    notifyError(e.message);
                }
            }

        }
    })
    return (
        <section className="createProductSection">
            <h2>Add product to your shop</h2>
            <form action="src/pages/Shop/CreateProduct/CreateProduct" className="createProductForm" onSubmit={formik.handleSubmit}>
                <article className="createProductInputWrapper">
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="productName">Title</label>
                        <input
                            className="createProductInput"
                            name="title"
                            id="productName"
                            placeholder='Choose a title'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.errors.title && <p className="createProductErrors">{formik.errors.title}</p>}
                    </div>
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="">Image</label>
                        <input
                            className="createProductInput"
                            name="image"
                            placeholder='Choose an image'
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                        <p className="createProductErrors">{formik.errors.image}</p>
                    </div>
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="">Model</label>
                        <input
                            className="createProductInput"
                            name="model"
                            placeholder='Choose an model'
                            onChange={formik.handleChange}
                            value={formik.values.model}
                        />
                        <p className="createProductErrors">{formik.errors.model}</p>
                    </div>
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="">Price</label>
                        <input
                            className="createProductInput"
                            type="number"
                            name="price"
                            placeholder='Choose a price'
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />
                        <p className="createProductErrors">{formik.errors.price}</p>
                    </div>
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="">Category</label>
                        <input
                            className="createProductInput"
                            name="category"
                            placeholder='Choose a category'
                            onChange={formik.handleChange}
                            value={formik.values.category}
                        />
                        <p className="createProductErrors">{formik.errors.category}</p>
                    </div>
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="">Description</label>
                        <TextareaAutosize minRows={2} />
                        <p className="createProductErrors">{formik.errors.description}</p>
                    </div>
                </article>
                <button type="submit" className="createProductButton">Create Product</button>
            </form>
        </section>
    )
}

export default CreateProduct;