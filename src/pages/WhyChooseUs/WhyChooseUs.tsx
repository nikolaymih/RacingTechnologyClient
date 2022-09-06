import { Button } from 'antd';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="whyChooseUs">
            <h3>Why choose us</h3>
            <p>We are one of the leading auto repair shops serving customers in Tucson.
                All mechanic services are performed by highly qualified mechanics.</p>
            <article className="chooseUsInfo">
                <article>
                    <h4>EVERY JOB IS PERSONAL</h4>
                    <p>Icon reminder</p>
                    <p>
                        If you want the quality you would expect from the dealership,
                        but with a more personal and friendly atmosphere,
                        you have found it.
                    </p>
                </article>
                <article>
                    <h4>BEST MATERIALS</h4>
                    <p>Icon reminder</p>
                    <p>
                        We have invested in all the latest specialist
                        tools and diagnostic software that is specifically
                        tailored for the software in your vehicle.
                    </p>
                </article>
                <article>
                    <h4>BEST MATERIALS</h4>
                    <p>Icon reminder</p>
                    <p>
                        Our auto repair shop is capable of servicing a variety
                        of models. We only do the work that is
                        needed to fix your problem.
                    </p>
                </article>
            </article>
            <Button size='large'>Read More!</Button>
        </section>
    )
}

export default WhyChooseUs;