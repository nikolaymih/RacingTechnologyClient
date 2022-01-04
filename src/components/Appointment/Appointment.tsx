import {Button} from "antd";
import './Appointment..css';

const Appointment = () => {
    return (
        <section className='makeAppointment'>
            <h2>BOOK NOW YOUR APPOINTMENT</h2>
            <p>We are one of the leading auto repair shops serving customers in Tucson.<br></br>
                All mechanic services are performed by highly qualified mechanics.</p>
            <article>
                <form>
                    <article className='appointmentVehicleInfo'>
                        <div className='vehicleInfoInputWrapper'>
                            <label className='vehicleInfoInputLabel' htmlFor="year">VEHICLE YEAR</label>
                            <input className='vehicleInfoInput' placeholder='Choose a year...' type="range" min="1990"
                                   max="2022" id='year'/>
                        </div>

                        <div className='vehicleInfoInputWrapper'>
                            <label className='vehicleInfoInputLabel' htmlFor="model">VEHICLE MODEL</label>
                            <input className='vehicleInfoInput' placeholder='Choose a model...' type="" id='model'/>
                        </div>

                        <div className='vehicleInfoInputWrapper'>
                            <label className='vehicleInfoInputLabel' htmlFor="mileage">VEHICLE MILEAGE</label>
                            <input className='vehicleInfoInput' placeholder='Vehicle mileage' type="text" id='mileage'/>
                        </div>
                    </article>
                    <article className='appointmentDateInfo'>
                        <article className="vehicleDateInfoInputWrapper">
                            <div className='vehicleInfoInputWrapper'>
                                <label className='appointmentDateInfoInput'
                                       htmlFor="appointmentDate">PREFERRED DATE OF
                                    APPOINTMENT</label>
                                <input className='vehicleInfoInput' placeholder="Choose a preferred date" type="date"
                                       id="appointmentDate"/>
                            </div>
                            <div className='vehicleInfoInputWrapper'>
                                <label className='appointmentDateInfoInput' htmlFor="appointmentTime">PREFERRED TIME OF
                                    APPOINTMENT</label>
                                <input className='vehicleInfoInput' placeholder="Choose a preferred time" type="time"
                                       id="appointmentDate"/>
                            </div>
                            <div className='vehicleInfoInputWrapper'>
                                <label className='appointmentDateInfoInput'>SELECT SERVICES NEEDED</label>
                                <div className="servicesCheckBoxWrapper">
                                    <div className="servicesCheckBox">
                                        <input type="checkbox" id='air-conditioning'/>
                                        <label id="air-conditioning">Air conditioning</label>
                                    </div>
                                    <div className="servicesCheckBox">
                                        <input type="checkbox" id='air-conditioning'/>
                                        <label id="air-conditioning">Brakes Repair</label>
                                    </div>
                                    <div className="servicesCheckBox">
                                        <input type="checkbox" id='air-conditioning'/>
                                        <label id="air-conditioning">Engine Diagnostics</label>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="appointmentContactsDetails">
                            <h4 className="appointmentDateInfoInput">CONTACT DETAILS</h4>
                            <input className="appointmentContactInput" type="text" placeholder="Your Name *"/>
                            <input className="appointmentContactInput" type="text" placeholder="Your Email *"/>
                            <input className="appointmentContactInput" type="text" placeholder="Your Phone *"/>
                            <textarea className="appointmentContactTextArea"
                                      placeholder="Add additional information or comments" cols={3} rows={4}/>
                            <Button type="primary" htmlType="submit" className="appointmentContactsButton">
                                Send
                            </Button>
                        </article>
                    </article>
                </form>
            </article>
        </section>
    )
}

export default Appointment;