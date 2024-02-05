import React from "react";

const Contact = () => {
    return (
        <div>
        <input type="text" placeholder="Type your name" className="prefixinput prefixinput-bordered w-full max-w-xs" />
        <input type="email" placeholder="Type your email" className="prefixinput prefixinput-bordered w-full max-w-xs" />
        </div>
    )
}

export default Contact;