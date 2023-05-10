import React from 'react';
import './/Contact.css';
// <form id="email-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
const Contact = () => {
    return (
        <>
            <div class="contact">
                <div class = "contact-main">
                    <h2>Got a question?</h2>
                    <form id="email-form">
                        <div emailForm="email-form">
                            <label for="subject" id="subject">Subject</label>
                            <input type="text" id="subject"></input>
                            <label for="email-address" id="email-address">Email Address</label>
                            <input type="text" id="email-address"></input>
                            <label for="message" id="message">Message</label>
                            <input type="text" id="message"></input>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <p>Contact address:</p>
                    <p>53 Portland St, Manchester, M1 3LD</p>
                </div>
            </div>
        </>
    );
}
export default Contact;