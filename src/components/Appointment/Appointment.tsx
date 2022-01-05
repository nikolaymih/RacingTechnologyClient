import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import AppointmentVehicleInfo from "../AppointmentVehicleInfo/AppointmentVehicleInfo";
import AppointmentDateInfo from "../AppointmentDateInfo/AppointmentDateInfo";
import AppointmentContacts from "../AppointmentContacts/AppointmentContacts";

import './Appointment..css';

const Appointment = () => {
    return (
        <section className='makeAppointment'>
            <h2>BOOK NOW YOUR APPOINTMENT</h2>
            <p>We are one of the leading auto repair shops serving customers in Tucson.<br></br>
                All mechanic services are performed by highly qualified mechanics.</p>
            <article>
                <form>
                    < AppointmentVehicleInfo/>
                    <article className='appointmentDateInfo'>
                        <AppointmentDateInfo/>
                        <AppointmentContacts/>
                    </article>
                </form>
            </article>
        </section>
    )
}

export default Appointment;