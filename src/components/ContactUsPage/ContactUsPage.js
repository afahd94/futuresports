import React from 'react';
import './ContactUsPage.css';

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>General Inquiries</h2>
        <p>Email: info@futuresportsclub.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="contact-info">
        <h2>Membership</h2>
        <p>Email: membership@futuresportsclub.com</p>
        <p>Phone: +1 (987) 654-3210</p>
      </div>
      <div className="contact-info">
        <h2>Coaching</h2>
        <p>Email: coaching@futuresportsclub.com</p>
        <p>Phone: +1 (555) 555-5555</p>
      </div>
    </div>
  );
}

export default ContactUsPage;
