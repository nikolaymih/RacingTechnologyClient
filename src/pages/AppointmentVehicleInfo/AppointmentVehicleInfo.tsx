import './AppointmentVehicleInfo.css';
import React from "react";

// export interface AppointmentProps extends React.PropsWithoutRef<JSX.IntrinsicElements["input"]> {
//     error: string | undefined;
// }

const AppointmentVehicleInfo = () => {
    return (
        <article className='appointmentVehicleInfo'>
            <div className='vehicleInfoInputWrapper'>
                <label className='vehicleInfoInputLabel' htmlFor="vehicleYear">VEHICLE YEAR</label>
                <input
                    className='vehicleInfoInput'
                    type="range"
                    placeholder='Choose a year...'
                    id='vehicleYear'
                    min="1990"
                    max="2022"
                />
            </div>

            <div className='vehicleInfoInputWrapper'>
                <label className='vehicleInfoInputLabel' htmlFor="vehicleModel">VEHICLE MODEL</label>
                <input
                    className='vehicleInfoInput'
                    placeholder='Choose a model...'
                    type="text"
                    id='vehicleModel'
                />
            </div>

            <div className='vehicleInfoInputWrapper'>
                <label className='vehicleInfoInputLabel' htmlFor="vehicleMileage">VEHICLE MILEAGE</label>
                <input className='vehicleInfoInput' placeholder='Vehicle mileage' type="text" id='vehicleMileage'/>

            </div>
        </article>
    )
}

export default AppointmentVehicleInfo;


