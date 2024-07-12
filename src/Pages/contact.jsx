import { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Contact Info:', contact);
        alert(`Name: ${contact.name}\nPhone: ${contact.phone}`);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
