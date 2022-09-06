import './Shop.scss';
import {useEffect, useState} from "react";
import {getProductsService} from "../../service/product.service";
import Product from "../../interfaces/product.interface";
import {notifyError} from "../../utils/notifiers";
import {LoadingSpinner} from "../../components/loaders/LoadingSpinner";
import ShopSingleProduct from "./ShopSingleProduct/ShopSingleProduct.";
import {ShopProductsCategories, shopProductsCategories} from "../../constants";

const Shop = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([{
        _id: '',
        name: '',
        image: '',
        price: 0
    }]);
    useEffect(() => {
        setLoading(true);
        const fetchProducts = async (): Promise<void> => {
            try {
                const fetchedProducts = await getProductsService();

                setProducts(fetchedProducts.data);
                setLoading(false);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    notifyError('Unable to load products, please try again later');
                    setLoading(false);
                }
            }
        }
        fetchProducts();
    }, [])
    return (
        <section className="shop-parts">
            <article className="shop-parts-title">
                <h2>Shop</h2>
            </article>
            <article className="shop-parts-main">
                <h4>Parts</h4>
                <div className="shop-categories">
                    {
                        Object.keys(shopProductsCategories).map((category: keyof typeof shopProductsCategories) => {
                            return (
                                <div key={shopProductsCategories[category].id} className="shop-single-category">
                                    <h1>{shopProductsCategories[category].name}</h1>
                                    <img src={shopProductsCategories[category].image} alt="no image"/>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}

export default Shop