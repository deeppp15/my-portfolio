import "./FormStyles.css";

import React, { Link,useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';
import { Reveal } from "../Utils/Reveal.tsx";

const SERVICE=process.env.REACT_APP_SERVICE_NAME;
const E_TEMPLATE=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const P_KEY=process.env.REACT_APP_PUBLIC_KEY;


const Form = () => {
  const navigate = useNavigate();


  const form = useRef();
  console.log(process.env.REACT);
 

  const sendEmail = (e) => {
    var re= new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    let personEmail=form.current[1].value;

    if(re.test(personEmail))
    {
        e.preventDefault();

        emailjs.sendForm(SERVICE,
                        E_TEMPLATE,
                        form.current,
                        P_KEY)
          .then((result) => {
              console.log(result.text);
              alert("your message has been sent !!");
    
          }, (error) => {
              console.log(error.text);
              alert("Error sending message   !!");
    
          });
        
        navigate('/my-portfolio');
    }else{
            alert("Message could not be sent"); 
    }
  };
  
  return <section id="contact" className="section"> 
    <div className="section">
        <h1>Let's Chat</h1>
        <div className="form">
                <form ref={form} >
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
    </div>
    </section>
};

export default Form;