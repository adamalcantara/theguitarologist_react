import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import "./Contact.css";

import Retrofret from "../../img/retrofret.jpg";

const Contact = () => {
  return (
    <div>
      <p className='headerText'>Contact Me</p>
      <p id='contactText'>Please use the form below to contact me. I look forward to hearing from you!</p>
      <div id='contactArea'>
      <img src={Retrofret} id='contactImg'></img>
      <ContactForm />
      </div>
    </div>
  )
}

export default Contact