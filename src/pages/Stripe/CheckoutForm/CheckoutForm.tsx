import './CheckoutForm.css'

// import CardSection from "../CardElement/CardSection";
import axios from "axios";

import React, {useEffect, useState} from "react";
import {useStripe, useElements} from '@stripe/react-stripe-js'

const url = `${process.env.REACT_APP_SERVERENDPOINT}`;

const style = {
    base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: 'Helvetica Neue',
        fontSize: '15px',

        '::placeholder': {
            color: '#CFD7E0',
        },
    },
};

// const cardBrandToPfClass = {
//     'visa': 'pf-visa',
//     'mastercard': 'pf-mastercard',
//     'amex': 'pf-american-express',
//     'discover': 'pf-discover',
//     'diners': 'pf-diners',
//     'jcb': 'pf-jcb',
//     'unknown': 'pf-credit-card',
// }

const CheckoutForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    let elements = useElements();

    useEffect(() => {
        let cardNumberElement = elements?.create('cardNumber', {
            style: style
        });
        cardNumberElement?.mount('#card-number-element');

        let cardExpiryElement = elements?.create('cardExpiry', {
            style: style
        });
        cardExpiryElement?.mount('#card-expiry-element');

        let cardCvcElement = elements?.create('cardCvc', {
            style: style
        });
        cardCvcElement?.mount('#card-cvc-element');
        // eslint-disable-next-line
    }, [])

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(e);
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

            const card = elements.getElement('card');

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

    const onCardNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }

    return (
        <section className="checkoutPayment">
            <form onSubmit={submitHandler}>
                <input type="hidden" name="token"/>
                <div className="group">
                    <h2>Checkout your order</h2>
                    <h3>The amount that you will be charged is 2239</h3>
                    <label>
                        <span>Card number</span>
                        <input
                            id="card-number-element"
                            className="field"
                            placeholder="1234 1234 1234 1234"
                            onChange={onCardNumberChangeHandler}
                        />
                        <span className="brand"><i className="pf pf-credit-card" id="brand-icon"/></span>
                    </label>
                    <label>
                        <span>Full name</span>
                        <input id="full-name" name="full-name" className="field" placeholder="Enter your full name"/>
                    </label>
                    <label>
                        <span>Expiry date</span>
                        <input id="card-expiry-element" className="field" placeholder="MM/YY"/>
                    </label>
                    <label>
                        <span>CVC</span>
                        <input id="card-cvc-element" className="field" placeholder="CVC"/>
                    </label>
                </div>
                <button type="submit">
                    {isProcessing ? 'processing' : 'Pay$25'}
                </button>
                {errorMessage}
            </form>
        </section>
    )
}

export default CheckoutForm;