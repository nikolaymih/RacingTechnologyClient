import { BackTop } from 'antd';
import './Footer.css';

const FooterApp = () => {
    return (
        <section className='footer'>
            <div className="footerHeadings">
                <h3>20 Rishki prohod blvd. Shumen, 9700</h3>
                <h3>Feel Free To Call Us Now<br></br> +359-887393652</h3>
            </div>
            <div className="footerInfo">
                <div>
                    <h4>ABOUT US</h4>
                    <p>20 Rishki prohod blvd.<br></br> Shumen, 9700</p>
                    <p>Mobile: +359-887393652</p>
                    <p>E-mail: d.dancho@gmail.com</p>
                </div>
                <div>
                    <h4>OUR SERVICES</h4>
                    <p>Belts and hoses</p>
                    <p>Engine diagnostics</p>
                    <p>Lube, oil and filters</p>
                    <p>Air conditioning</p>
                    <p>Tire and wheel services</p>
                    <p>Brake repair</p>
                </div>
                <div>
                    <h4>HOURS</h4>
                    <p>Monday:&ensp;7:30am - 5:30pm</p>
                    <p>Tuesday:&ensp;7:30am - 5:30pm</p>
                    <p>Wednesday&ensp;7:30am - 5:30pm</p>
                    <p>Thursday:&ensp;7:30am - 5:30pm</p>
                    <p>Friday:&ensp;7:30am - 5:30pm</p>
                    <p>Saturday:&ensp;7:30am - 3:00pm</p>
                    <p>Sunday:&ensp;Closed</p>
                </div>
            </div>
            <BackTop>
                <div className="goTop">
                    <i className="fas fa-arrow-circle-up "></i>
                </div>
            </BackTop>
        </section>
    )
}

export default FooterApp;