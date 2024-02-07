import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Button } from "@material-tailwind/react";
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

            <span color="blue-gray" className="font-bold text-4xl flex justify-center items-center
            ">Contact Me!</span>
            <p className="flex justify-center items-center">I will reply in 2days 😊 </p>
            <br/><br /><br />
            <div className="flex w-96 flex-col gap-6">
                <label>What's your name?</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label>What's your email?</label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                <label >Message</label>
                <textarea placeholder="Type your message!" className="textarea textarea-bordered textarea-lg w-full max-w-xs object-contain" />
                <Button  size="lg" className="rounded-full  bg-black text-white
                flex justify-center items-center" >
                    send
                </Button>
                </div>


</motion.div>
    )
}

export default Contact;