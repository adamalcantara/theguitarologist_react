import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqybawb");
  if (state.succeeded) {
      return <p>Thank you for your message!</p>;
  }
  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm