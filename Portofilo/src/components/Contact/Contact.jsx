import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contantData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "ararbyahmed1400@gmail.com",
    link: "ararbyahmed1400@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Ahmed Abdo",
    link: "https://m.me/ahmed.abdo.50",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "0111 814 9183",
    link: "https://api.whatsapp.com/send?phone=201112119676",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">
        <div className="contact-options">
          {contantData.map(({ id, icon, title, info, link }) => {
            return (
              <article key={id} className="contact-option">
                <a href={link} target="_blank" rel="noreferrer">
                  <span className="icon">{icon}</span>
                  <h4>{title}</h4>
                  <h5>{info}</h5>
                </a>
              </article>
            );
          })}
        </div>

        <form>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea placeholder="Your Message" rows={10}></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
