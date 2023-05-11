import React from 'react';
import {useState, useEffect} from 'react';
import postEmailForm from '../../Services/Contact';
import Modal from "react-bootstrap/Modal";
import { getDiscussions } from "../../Services/DiscussionService";
import './Contact.css';


const Contact = () => {
    const [formData, setFormData] = useState({});

    const updateState = (e) => {
        const newData = formData;
        newData[e.target.id] = e.target.value;
        setFormData(newData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        
    }


// <form id="email-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    // save all of the data from each of the inputs into an object
    // call the post function from your api file, use useEffect and pass in the object to the post function
    // 
    return (
        <>
            <div class="contact">
                <div class = "contact-main">
                    <h2>Got a question?</h2>
                    <form id="email-form">
                        <div emailForm="email-form">
                            <label for="subject" id="subject">Subject</label>
                            <input type="text" id="subject" onChange={updateState}></input>
                            <label for="email-address" id="email-address">Email Address</label>
                            <input type="email" id="email-address" onChange={updateState}></input>
                            <label for="message" id="message">Message</label>
                            <textarea  rows="5" cols="40" type="text" id="message" onChange={updateState}></textarea>
                            <button type="submit" onClick={submitForm}>Submit</button>
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