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
      transition={{ type: "spring" }} id="Contact" className="gap-5 card w-3/4 glass flex ">
        <span className="font-bold text-4xl">You can email me!</span>
        <br/>
        <form onSubmit={handleSubmit} className="emailForm">
          <input type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          <input  type="email"
          value={email}
          placeholder="ex)ascd@gmail.com"
          onChange={(e)=> setEmail(e.target.value)}/>
          <textarea
          value={message}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          <button type="submit" className="text-white bg-slate-400 max-8 py-4 rounded-full w-32 flex justify-center items-center transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" >Send</button>

        </form>
</motion.div>
    )
}

export default Contact;