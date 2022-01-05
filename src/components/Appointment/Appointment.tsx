import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {object, string, number, date, TypeOf} from "zod";
import {Button} from "antd";

import AppointmentVehicleInfo from "../AppointmentVehicleInfo/AppointmentVehicleInfo";
import AppointmentDateInfo from "../AppointmentDateInfo/AppointmentDateInfo";
import AppointmentContacts from "../AppointmentContacts/AppointmentContacts";

import './Appointment..css';
import React from "react";

const appointmentInputSchema = object({
    // vehicleYear: number()
    //     .gt(1990, {
    //         message: 'Year should not be less than 1990'
    //     })
    //     .lt(new Date().getFullYear(), {
    //         message: `Year should not be larger than ${new Date().getFullYear()}`
    //     }),
    // vehicleModel: string()
    //     .min(1, {
    //     message: 'Model should not be empty'
    // }),
    vehicleMileage: string(),
    //     .gt(0, {
    //     message: 'Mileage should not be lesser than 1'
    // }),
    // appointmentDate: date(),
    // appointmentHour: date(),
    // appointmentServices: string().min(1, {
    //     message: 'You should choose at least one service'
    // }),
    contactName: string()
    // .min(1, {
    //     message: 'Your name should not be empty'
    // }),
    // contactEmail: string().min(1, {
    //     message: 'Email should not be empty'
    // }),
    // contactInfo: string()

})

export type AppointmentUserInput = TypeOf<typeof appointmentInputSchema>

const Appointment = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<AppointmentUserInput>({
        resolver: zodResolver(appointmentInputSchema)
    });
    // const appointmentVehicleInfoRefs = {
    //     year: {...register('vehicleYear')},
    //     model: {...register('vehicleModel')},
    //     mileage: {...register('vehicleMileage')}
    // }

    const appointmentSubmitHandler = (data: AppointmentUserInput) => {
        console.log(data)
    }

    return (
        <section className='makeAppointment'>
            <h2>BOOK NOW YOUR APPOINTMENT</h2>
            <p>We are one of the leading auto repair shops serving customers in Shumen.<br></br>
                All mechanic services are performed by highly qualified mechanics.</p>
            <article>
                <form onSubmit={handleSubmit(appointmentSubmitHandler)}>
                    <AppointmentVehicleInfo />

                    <article className='appointmentDateInfo'>
                        <AppointmentDateInfo/>
                        <AppointmentContacts
                            {...register('contactName')}
                            error={errors.contactName?.message}
                        />
                    </article>
                    <Button type="primary" htmlType="submit" className="appointmentContactsButton">
                        Send
                    </Button>
                </form>
            </article>
        </section>
    )
}

export default Appointment;