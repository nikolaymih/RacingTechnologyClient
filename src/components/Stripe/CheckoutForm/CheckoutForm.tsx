import './CheckoutForm.css'

import CardSection from "../CardElement/CardSection";
import axios from "axios";

import React, {useState} from "react";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'

const url = `${process.env.REACT_APP_SERVERENDPOINT}`;

const CheckoutForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    let elements = useElements();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const cardElement = elements?.create("shippingAddress");
        cardElement?.mount("#card-element");

        try {
            setIsProcessing(true);

            if (!stripe || !elements) {
                setErrorMessage('Page is still loading');
                setIsProcessing(false);
                return;
            }

            const response = await axios({
                method: 'post',
                baseURL: `${url}/api/payment-intends`,
                data: {
                    paymentAmount: 2239
                }
            })

            const card = elements.getElement(CardElement);

            if (!card) {
                setIsProcessing(false);
                setErrorMessage('Something went wrong, please try again later');
                return;
            }

            const createdPayment = await stripe.createPaymentMethod({
                type: 'card',
                card
            });

            if (createdPayment?.error) {
                setIsProcessing(false);
                setErrorMessage(createdPayment.error.message!);
                return;
            }

            const clientSecret = response.data;
            const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
                payment_method: createdPayment!.paymentMethod.id
            });

            setIsProcessing(false);

            if (confirmPayment?.error) {
                setErrorMessage(confirmPayment.error.message!);
                return
            }

            setErrorMessage('Successful payment');
        } catch (e: unknown) {
            if (e instanceof Error) {
                setIsProcessing(false);
                setErrorMessage(e.message);
            }
        }
    }
    return (
        <section className="checkoutPayment">
            <h2>Checkout your order</h2>
            <h3>The amount that you will be charges is 2239</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="card-element">shipping card</label>
                <input id="card-element" />
                <CardSection/>
                {errorMessage && <p>{errorMessage}</p>}
                {isProcessing
                    ? (
                        <button disabled>processing</button>
                    )
                    : <button>Pay</button>
                }
            </form>
        </section>
    )
}

export default CheckoutForm;