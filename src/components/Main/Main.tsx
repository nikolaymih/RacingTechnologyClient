import AppointmentLink from '../AppointmentLink/AppointmentLink';
import CarouselComponent from '../Carousel/Carousel';
import Faq from '../Faq/Faq';
import ProvidedServices from '../ProvidedServices/ProvidedServices';
import VechilesServiced from '../VechilesServiced/VechilesServiced';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

import './Main.css';

const Main = () => {
    return (
        <>
            <CarouselComponent />
            <AppointmentLink />
            <WhyChooseUs />
            <VechilesServiced />
            <ProvidedServices />
            <Faq />
        </>
    )
}

export default Main;