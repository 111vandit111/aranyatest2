import React , { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {AiFillInstagram , AiFillMail} from 'react-icons/ai'

import "./Contact.css";

const Contact = () => {
  const [ stats , setStats ] = useState("green");
  const [btnStats , setBtnStats ] = useState("Send");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1vsfkxt', 'template_bxay9my', form.current, '5EFkZq1I70N0wqVv2')
      .then((result) => {
          console.log(result.text);
          const timeOut = setInterval(() => {
            clearTimeout(timeOut);
            setStats("green");
            clear
            setBtnStats("Send");
          }, 3000);
          setStats("green");
          setBtnStats("Sent");
      }, (error) => {
          console.log(error.text);
          setStats("red");
          setBtnStats("error");
          const timeOut = setInterval(() => {
          clearTimeout(timeOut);
          setStats("green");
          setBtnStats("Try again");
          }, 3000);
          
      });
  };

  return (
    <section className="contact section" id="contact">
      {" "}
      
      <div className="contact_container grid">
        {" "}
        <div className="contact_info">
          {" "}
          <h2 className="section_title">Get In Touch</h2>{" "}
          <h3 className="contact_title">Let's talk about everything!</h3>{" "}
          <p className="contact_details">
            Don't like forms? Slide in our DMs 😉.{" "}
          </p>{" "}
          <div className="scocials">
              <a href="https://www.instagram.com/aranyabystories/?hl=en" target="_blank" className="insta"><AiFillInstagram /></a>
              <a href="mailto:aranyabystories@gmail.com" target="_blank" className="mail"><AiFillMail /></a>
          </div>
        </div>{" "}
        <form action="" className="contact_form" ref={form} onSubmit={sendEmail}>
          {" "}
          <div className="contact_form-group">
            <div className="contact_form-div">
              {" "}
              <input
                name="clientName"
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
                required={true}
              />{" "}
            </div>{" "}
            <div className="contact_form-div">
              {" "}
              <input
                name="clientEmail"
                type="text"
                className="contact_form-input"
                placeholder="Insert your EMail"
                required={true}
              />{" "}
            </div>{" "}
            <div className="contact_form-div">
              {" "}
              <input
                name="subject"
                type="tel"
                className="contact_form-input"
                placeholder="Insert your Phone Number"
                required={true}
              />{" "}
            </div>{" "}
            

            
          </div>
          <div className="contact_form-div contact_form-area">
              {" "}
              <textarea
                name="message"
                type="textarea"
                id=""
                cols="30"
                rows="10"
                className="contact_form-input contact_form-area"
                placeholder="Write your message"
                resize="none"
                required={true}
              ></textarea>{" "}


            </div>{" "}
          <button className={`btn ${stats}` } type="submit" value="Send" >{btnStats}</button>
        </form>{" "}
      </div>
    </section>
  );
};

export default Contact;
