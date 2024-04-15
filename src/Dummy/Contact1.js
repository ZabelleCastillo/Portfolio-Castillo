import React from 'react';
import emailjs from '@emailjs/browser';

export default function Contact1() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_k48842u', 'template_bmjttw9', e.target, 'vFD_66C3x37vIGz2s')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
        <br/>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" /> <br/>
      <label>Name</label>
      <input type="text" id="name" name="name" /> <br/>
      <label>Email</label>
      <input type="email" id="email" name="email" /> <br/>
      <label>Subject</label>
      
      <label>Message</label>
      <textarea id="message" name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}