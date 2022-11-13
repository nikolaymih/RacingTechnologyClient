import './Shop.scss';
import {useEffect, useState} from "react";
import {getProductsService} from "../../service/product.service";
import Product from "../../interfaces/product.interface";
import {notifyError} from "../../utils/notifiers";
import {LoadingSpinner} from "../../components/loaders/LoadingSpinner";
import ShopSingleProduct from "./ShopSingleProduct/ShopSingleProduct.";
import {ShopProductsCategories, shopCarModels} from "../../constants";

const Shop = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([{
        title: '',
        model: '',
        image: '',
        price: 0,
        category: '',
        description: ''
    }]);
    useEffect(() => {
        setLoading(true);
        const fetchProducts = async (): Promise<void> => {
            try {
                const fetchedProducts = await getProductsService();
                console.log(fetchedProducts);
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
                        Object.keys(shopCarModels).map((category: keyof typeof shopCarModels) => {
                            return (
                                <div key={shopCarModels[category].id} className="shop-single-category">
                                    <img src={shopCarModels[category].image} alt="no image"/>
                                    <h1>{shopCarModels[category].name}</h1>
                                    <i className="fas fa-duotone fa-arrow-right" />
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