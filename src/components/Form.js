import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE=process.env.REACT_APP_SERVICE_NAME;
const E_TEMPLATE=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const P_KEY=process.env.REACT_APP_PUBLIC_KEY;


const Form = () => {
   

  const form = useRef();
  console.log(process.env.REACT);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE,
                    E_TEMPLATE,
                    form.current,
                    P_KEY)
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
      
  };
  
  return  <div className="form">
        <form ref={form}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email"  name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type your message here" />
            <button className="btn" onClick={sendEmail}>Submit</button>
        </form>      
    </div>;
};

export default Form;