import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {motion} from 'framer-motion';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_nt2ys31","template_o7hjf2r",form.current,"prnZa_dzaCeeZ3FuH").then((result)=>{
      console.log(result.text);
      alert("Sent!")
    }, (error)=>{
      console.error(error.text);
    });
  };
  
    return (
      <motion.div
      animate={{ x: 100 }}
      transition={{ type: "spring" }} id="Contact">
        <span>You can email me!</span>
        <h1>I will reply asap😊</h1>
        <br/>
        <form ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input type="email" name="email"/>
          <label>Name</label>
          <input type="name" name="name" required/>
          <textarea name="message" placeholder="message" required/> \
          <input type="submit" value="Send" className=""/>
        </form>
   
  
</motion.div>
    )
}

export default Contact;