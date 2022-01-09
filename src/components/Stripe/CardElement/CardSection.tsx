import {CardElement, CardExpiryElement, PaymentElement, PaymentRequestButtonElement} from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    hidePostalCode: true,
    style: {
        base: {
            color: '#32325d',
            theme: 'night',
            labels: 'floating',
            lineHeight: '24px',
            fontFamily: 'Helvetica Neu',
            fontSmoothing: 'antialiasing',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};

const CardSection = () => {
    return (
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
    )
}

export default CardSection;