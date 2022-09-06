import axios from "axios";
import {CreateProductInput} from "../validation/createProduct.validation";
import { AxiosResponse } from "axios"
import Product from "../interfaces/product.interface";

const url = `${process.env.REACT_APP_SERVERENDPOINT}`;

export const createProductService = async (values: CreateProductInput) => {
    return axios({
        method: "POST",
        baseURL: `${url}/api/product`,
        data: {
            ...values,
        },
        withCredentials: true
    })
}

export const getProductsService = async (): Promise<AxiosResponse<Product[]>> => {
    return axios({
        method: 'GET',
        baseURL: `${url}/api/products`
    })
}