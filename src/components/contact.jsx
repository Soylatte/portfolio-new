import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import {motion} from 'framer-motion'


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
      <motion.div
      animate={{ x: 100 }}
      transition={{ type: "spring" }} id="Contact" >
        <span className="font-bold text-4xl ">You can email me!</span>
        <h1 className="text-xl">I will reply asap😊</h1>
        <br/>
         <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email</span>
    </div>
    <input type="text" name="email"placeholder="ex)abcd@gmail.com" className="input input-bordered w-full max-w-xl" />
    </label>
    <br/><br/><br/>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name</span>
    </div>
    <input type="text" name="name" placeholder="Soyeon Kim" className="input input-bordered w-full max-w-xs" />
    </label>
    <br/><br/><br/>
  
    <textarea placeholder="Message" name="message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
    <br/><br/><br/>
    <input type="submit" value="Send" className="btn" onSubmit={sendEmail}/>
               
</motion.div>
    )
}

export default Contact;