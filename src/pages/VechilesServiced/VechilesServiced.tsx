import './VechilesServiced.css';

const VechilesServiced = () => {
    return (
        <section className='vechilesServiced'>
            <article className='vechilesPicture'>
                <img src="https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg" alt="" />
            </article>
            <article className='vechilesInformation'>
                <h3>Vechiles Serviced</h3>
                <p>We provide top notch maintenance service for all types of vehicles.
                    We are certified to service and repair the following makes:</p>
                <div className='modelTypes'>
                    <div className='ModelTypesSection'>
                        <p>General Motors</p>
                        <p>Land Rover</p>
                        <p>Lexus</p>
                        <p>Lincoln</p>
                        <p>Mazda</p>
                    </div>
                    <div className='ModelTypesSection'>
                        <p>Mercedes - Benz</p>
                        <p>Mercury</p>
                        <p>Mitsubishi</p>
                        <p>Nissan</p>
                        <p>Renault</p>
                    </div>
                    <div className='ModelTypesSection'>
                        <p>Plymouth</p>
                        <p>Pontiac Porsche</p>
                        <p>Rover</p>
                        <p>Saab</p>
                        <p>Saleen</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default VechilesServiced;