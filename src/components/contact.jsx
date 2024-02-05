import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_rbehfwo', 'template_aavc1me', form.current, {
            publicKey: 'Dug0pRg3X3nJUyo9D',
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
            <form>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" value='Send'/>
            </form>
</div>
    )
}

export default Contact;