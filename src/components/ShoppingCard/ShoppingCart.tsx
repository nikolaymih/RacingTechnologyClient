import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button} from 'antd';
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <section className="shoppingCartSection">
            <article className="cartProductsDetails">
                <article className="cartProductsHeaders">
                    <h2>Shopping Cart</h2>
                    <h2>3 Items</h2>
                </article>
                <article>
                    <div className="cartProductsDescription">
                        <h3>Product Details</h3>
                        <h3>Quantity</h3>
                        <h3>Price</h3>
                        <h3>Total</h3>
                    </div>
                    <div className="cartSingleProductInfo">
                        <div className="cartSingleProductDetails">
                            <img
                                src="https://medina-med.com/files/tyres/0-01-05-0-0-03-1-0731.jpg"
                                alt="no image"
                            />
                            <h4>MICHELIN 165/65R14</h4>
                        </div>
                        <div className="cartSingleProductQuantity">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                        <p>924lv</p>
                        <p>924lv</p>
                    </div>
                    <div className="cartSingleProductInfo">
                        <div className="cartSingleProductDetails">
                            <img
                                src="https://m.media-amazon.com/images/I/612sNJ+2VVL._AC_UY327_FMwebp_QL65_.jpg"
                                alt="no image"
                            />
                            <h4>Momo MOM11150085221</h4>
                        </div>
                        <div className="cartSingleProductQuantity">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                        <p>399lv</p>
                        <p>399lv</p>
                    </div>
                    <div className="cartSingleProductInfo">
                        <div className="cartSingleProductDetails">
                            <img
                                src="https://s.alicdn.com/@sc04/kf/H387729b82bdd42ffbf6ddbcbeed90bf85.jpg_300x300.jpg"
                                alt="no image"
                            />
                            <h4>BMW 320 Car Engine</h4>
                        </div>
                        <div className="cartSingleProductQuantity">
                            <button>-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                        <p>999lv</p>
                        <p>999lv</p>
                    </div>
                </article>
                <Link to="/services" className="continueShopping">
                    <ArrowBackIcon className="continueShoppingArrow" />Continue Shopping
                </Link>
            </article>

            <article className="cartOrderCheckout">
                <h2>Order Summary</h2>
                <div className="cartOrderProductsInfo">
                    <span>ITEMS: 3</span>
                    <span>2232lv.</span>
                </div>
                <p>Shipping:</p>
                <select>
                    <option>Standard delivery: 6lv</option>
                    <option>Fast delivery: 8lv</option>
                </select>
                <label htmlFor="promoCode">Promo Code:</label>
                <input type="text" id="promoCode"/>
                <Button size="large">Apply</Button>
                <div className="cartOrderTotalPrice">
                    <p>Total Price:</p>
                    <p>2238lv</p>
                </div>
                <Button size="large">CHECKOUT</Button>
            </article>
        </section>
    )
}

export default ShoppingCart