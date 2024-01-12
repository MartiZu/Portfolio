import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const service_id = process.env.YOUR_SERVICE_ID
const template_id = process.env.YOUR_TEMPLATE_ID
const public_key = process.env.YOUR_PUBLIC_KEY

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};