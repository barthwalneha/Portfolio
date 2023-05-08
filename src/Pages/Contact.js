import React from "react";

const Contact = () => {
    return (
        <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title" id="letsConnect"  >Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>123456789</h2>
            <h2>234567890</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-info">
            <h1>Email</h1>
            <h2>nbarthwal30@gmail.com</h2>
            <h2>nehabarthwal117@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Dehradun,Uttarakhand </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Contact;