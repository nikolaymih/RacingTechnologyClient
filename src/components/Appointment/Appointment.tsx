import './Appointment..css';

const Appointment = () => {
    return (
        <section className='makeAppointment'>
            <h2>BOOK NOW YOUR APPOINTMENT</h2>
            <p>We are one of the leading auto repair shops serving customers in Tucson.<br></br>
                All mechanic services are performed by highly qualified mechanics.</p>
            <article>
                <article className='vehicleInfo'>
                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' htmlFor="year">VEHICLE YEAR</label>
                        <input className='vehicleInfoInput' placeholder='Choose a year...' type="range" min="1990"
                            max="2022" id='year' />
                    </div>

                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' htmlFor="model">VEHICLE MODEL</label>
                        <input className='vehicleInfoInput' placeholder='Choose a model...' type="" id='model' />
                    </div>

                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' htmlFor="mileage">VEHICLE MILEAGE</label>
                        <input className='vehicleInfoInput' placeholder='Vehicle mileage' type="text" id='mileage' />
                    </div>
                </article>
                <article className='appointmentInfo'>
                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' htmlFor="appointmentDate">PREFERRED DATE OF APPOINTMENT</label>
                        <input className='vehicleInfoInput' placeholder="Choose a preferred date" type="date" id="appointmentDate" />
                    </div>
                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' htmlFor="appointmentTime">PREFERRED TIME OF APPOINTMENT</label>
                        <input className='vehicleInfoInput' placeholder="Choose a preferred time" type="time" id="appointmentDate" />
                    </div>
                    <div className='vehicleInfoInputWrapper'>
                        <label className='vehicleInfoInputLabel' >SELECT SERVICES NEEDED</label>
                        <div className="servicesCheckBox">
                            <input type="checkbox" id='services' />
                            <label id="scales">Air conditioning</label>
                        </div>
                    </div>
                </article>
            </article>

        </section>
    )
}

export default Appointment;