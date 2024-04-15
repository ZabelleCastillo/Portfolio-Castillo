import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_k48842u', 'template_bmjttw9', form.current, {
        publicKey: 'vFD_66C3x37vIGz2s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
        <br/>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id="name" name="name" /> <br/>
      <label>Email</label>
      <input type="email" id="email" name="email" /> <br />
      <label>Message</label>
      <textarea id="message" name="message" /> <br/>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
export default ContactUs;