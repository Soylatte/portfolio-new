import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Button } from "@material-tailwind/react";

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
    
        <div className='form'>
            <span className='text-center font-bold'>Contact Me!</span>
            <p>I will reply in 2days </p>
            <form className="flex w-96 flex-col gap-6 justify-center text-center">
                <label>Name</label>
                <input size='lg' type="text" name="user_name" />
                <label>Email</label>
                <input size='lg' type="email" name="user_email" />
                <label >Message</label>
                <textarea name="message"/>
                <Button size='lg' type="submit" value='Send' variant="outlined" className="rounded-full">
                    submit
                </Button>
            </form>
</div>
    )
}

export default Contact;