import './AppointmentVehicleInfo.css';

const AppointmentVehicleInfo = () => {
    return (
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
    )
}

export default AppointmentVehicleInfo;