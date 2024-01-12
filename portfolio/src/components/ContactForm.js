import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const serviceId = "service_4edwhnl";
const templateId = "template_jv1u5rn";
const publicKey = "dg5CYoSjosK5PjMBp5";

export default function ContactForm() {
  useEffect(() => emailjs.init(publicKey), []);
  const form = useRef();
  //   const emailRef = useRef<HTMLInputElement>();
  // const nameRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log("Sending email...");
      await emailjs.sendForm(serviceId, templateId, form.current);
      console.log("Email sent successfully.");
      alert("email successfully sent check inbox");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="btn" type="submit" value="Send" disabled={loading} />
    </form>
  );
}
