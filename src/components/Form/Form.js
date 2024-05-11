import "./FormStyles.css";

import React, { useRef ,useState }  from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE=process.env.REACT_APP_SERVICE_NAME;
const E_TEMPLATE=process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const P_KEY=process.env.REACT_APP_PUBLIC_KEY;

//Form Submission code
const Form = () => {
  const form = useRef();

   function EMAIL() {
    this.emailSent = false;
    this.validated= false;
  }


  //VALIDATE INPUT
  EMAIL.prototype.validate =  function (e){
    e.preventDefault();

    var re= new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    const email= form.current[1].value;
    console.log('Email is- ',email);
    if (!re.test(email)  || email==undefined || email=="" ){
        console.log('Not valid');
        return this;      
      }
    
    let input=form.current[0].value;
    
    for (let i = 0; i <= 3; i++) {
      if(i==1)continue;
      if(input == "" || input==undefined){
       console.log('Not valid');
        return this;      
      }
    }
    this.validated=true;
     console.log('Valid or not ',this.validated);

   return this;
  }
  
  //SEND EMAIL FUNCTION
  EMAIL.prototype.sendEmail =  function (e){
    e.preventDefault();
    console.log("Service : "+SERVICE+", E_Template  "+SERVICE+", P_KEY: "+SERVICE);    

    console.log('Inside sendEmail');

    if(form.current && this.validated==true){
    emailjs.sendForm(SERVICE, E_TEMPLATE, form.current, P_KEY)
             .then((result) => {
                console.log("Emailjs success:", result.text);
                this.emailSent=true;
               console.log('setting emailSent is', this.emailSent);
                this.toggleModal(e);
              })
           .catch((error) => {
                 console.error("Emailjs error:", error.text);
                 this.toggleModal(e);

             })
             .finally(() => {
             console.log("Finally block executed");

            });
    }

    return Promise.resolve(this);
  };

  ///Notification Code
  EMAIL.prototype.toggleModal = async function (e){
    e.preventDefault();
    console.log('togglemodal emailSent is', this.emailSent);
    let title,text,icon;
    if (this.emailSent) {
      title= "Success";
      text= "Thank you for reaching out to me. You can expect a response from me in 5 buisness days";
      icon= "success";
    }else{
      title= "Failed";
      text= "Error sending email, please check input fields and try again";
      icon= "error";        
    }

     await Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "rgb(248, 217, 15)",
      timer: 10000
    }).then(()=>{
      console.log('showed success box');
     
        console.log('Ok button clicked');
        window.location.href = "/my-portfolio/";

    }).catch(()=>{
      console.log("Some error in popup dawg");
    });

    this.emailSent=false;
   
    return Promise.resolve(this);
  };

  
  return <section id="contact" className="section">
    <div className="section">
        <h1>Let's Chat</h1>
        <div className="form">
        <form ref={form} onSubmit={async(e)=>{await  new EMAIL().validate(e).sendEmail(e); }}>
                    <label>Your Name *</label>
                    <input type="text" name="user_name" placeholder="Enter your name"  required></input>
                    <label>Email *</label>
                    <input type="email"  name="user_email"  placeholder="Enter email" required></input>
                    <label>Subject *</label>
                    <input type="text" name="subject" placeholder="Enter subject" required></input>
                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Type your message here" />
                    <button className="btn " type="submit">Submit</button>
                </form>
        </div>
    </div>
    </section>
};
export default Form;