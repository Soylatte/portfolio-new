import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import {motion} from 'framer-motion';


const Contact = () => {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_nt2ys31';
    const templateId = 'template_aavc1me';
    const publicKey = 'prnZa_dzaCeeZ3FuH';

    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: 'Soyeon Kim',
      message: message,
    };

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response)=> {
      console.log('Email sent!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error)=>{
      console.error('Error sending mail', error);
    });
  }
  
    return (
      <motion.div
      animate={{ x: 100 }}
      transition={{ type: "spring" }} id="Contact">
        <span>You can email me!</span>
        <h1>I will reply asap😊</h1>
        <br/>
        <form onSubmit={handleSubmit} className="emailForm">
          <input type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          <input  type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
          <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          <button type="submit" className="text-black">Send</button>

        </form>
   
  
</motion.div>
    )
}

export default Contact;