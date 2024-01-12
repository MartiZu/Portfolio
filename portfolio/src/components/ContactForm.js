import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const serviceId = "service_4edwhnl";
const templateId = "template_jv1u5rn";
const publicKey = "IzQ1An0TEyGnzyH4T";

export default function ContactForm() {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending email...");
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      alert("Details sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("Unable to send details, try again!");
      console.error("Error sending email:", error);
    } finally {
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className="text-area" name="message" />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
}
