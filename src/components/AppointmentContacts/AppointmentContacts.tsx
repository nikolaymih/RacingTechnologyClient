import './AppointmentContacts.css';
import React from "react";

interface AppointmentContactsProps extends React.PropsWithoutRef<JSX.IntrinsicElements["input"]> {
    error: string | undefined
}

const AppointmentContacts = React.forwardRef<HTMLInputElement, AppointmentContactsProps>(({error}, ref) => {
    return (
        <article className="appointmentContactsDetails">
            <h4 className="appointmentDateInfoInput">CONTACT DETAILS</h4>
            <label htmlFor="contactName">username</label>
            <input
                className="appointmentContactInput"
                type="text"
                placeholder="Your Name *"
                id="contactName"
            />
            <p>{error}</p>
            <input className="appointmentContactInput" type="text" placeholder="Your Email *" ref={ref} />
            <input className="appointmentContactInput" type="text" placeholder="Your Phone *"/>
            <textarea
                className="appointmentContactTextArea"
                placeholder="Add additional information or comments"
                cols={3}
                rows={4}
            />
        </article>
    )
})

export default AppointmentContacts;