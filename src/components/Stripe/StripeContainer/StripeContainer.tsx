import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISH_KEY}`);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default StripeContainer;