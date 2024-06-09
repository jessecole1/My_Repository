import React from 'react';

const ContactForm = (props) => {

    const {handleContactClick} = props;

    return (
        <div className={`z-10 !opacity-100 rounded-xl bg-gradient-to-r from-blue-950 to-[#6366f1] text-white p-4 w-1/3 h-3/4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <button onClick={handleContactClick}>Close</button>
            <h3 class="text-2xl">Request a meeting, get info, say hi..</h3>
            <form class="flex flex-col justify-evenly items-center h-full">
                <input class="w-1/2 rounded p-2 text-black" placeholder="Name" type="text" name="name"/>
                <input class="w-1/2 rounded p-2 text-black" placeholder="Email" type="email" name="email"/>
                <textarea class="w-1/2 rounded p-2 text-black resize-none h-1/4" placeholder="Message..." name="message"/>
                <button class="font-bold bg-white text-black p-2 rounded">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
