import './AppointmentDateInfo.css';

const AppointmentDateInfo = () => {
    return (
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
                    <div className="servicesCheckBox">
                        <input type="checkbox" id='air-conditioning'/>
                        <label id="air-conditioning">Engine Diagnostics</label>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AppointmentDateInfo;