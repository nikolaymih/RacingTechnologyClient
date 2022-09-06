import './CreateProduct.css'

import React from "react";
import {useFormik} from 'formik';
import Product from "../../interfaces/product.interface";
import createProductSchema from "../../validation/createProduct.validation";
import {createProductService} from "../../service/product.service";
import {useNavigate} from "react-router-dom";
import {notifyError, notifySuccess} from "../../utils/notifiers";

const CreateProduct: React.FC = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            _id: '',
            name: '',
            image: '',
            price: 0
        },
        validationSchema: createProductSchema,
        onSubmit: async (values: Product) => {
            try {
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
            <form action="" className="createProductForm" onSubmit={formik.handleSubmit}>
                <article className="createProductInputWrapper">
                    <div className="createProductSingleInput">
                        <label className="createProductLabel" htmlFor="productName">Name</label>
                        <input
                            className="createProductInput"
                            name="name"
                            id="productName"
                            placeholder='Choose a name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name && <p className="createProductErrors">{formik.errors.name}</p>}
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
                </article>
                <button type="submit" className="createProductButton">Create Product</button>
            </form>
        </section>
    )
}

export default CreateProduct;