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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }} id="Contact" className="gap-5 card flex flex-col items-center justify-center mx-auto p-5 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <span className="font-bold text-4xl">You can email me!</span>
        <br/>
        <form onSubmit={handleSubmit} className="emailForm w-full">
          <input type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>
          <input  type="email"
          value={email}
          placeholder="ex)ascd@gmail.com"
          onChange={(e)=> setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>
          <textarea
          value={message}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg resize-none">
          </textarea>
          <div className="text-center">
          <button type="submit" className="text-white bg-slate-400 px-6 py-3 rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" >Send</button>
          </div>

        </form>
</motion.div>
    )
}

export default Contact;