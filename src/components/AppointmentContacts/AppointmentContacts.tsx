import './AppointmentContacts.css';
import {Button} from "antd";

const AppointmentContacts = () => {
    return (
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
    )
}

export default AppointmentContacts;