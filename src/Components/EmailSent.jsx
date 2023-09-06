import React from "react";
import { Link } from "react-router-dom";

function EmailSent(){
    return(
        <main className='email-sent-container'>
            <h1 className='email-sent-h1'>YOUR EMAIL HAS BEEN SENT SUCCESSFULLY</h1>
            <h2 className='email-sent-h2 text-center'>I will reply your inquiry soon. <hr /> <span className='danke-span'>Thank you Gracias Danke</span></h2>
            <Link to='/' className='email-sent-link'>Back to Home Page</Link>
        </main>
    )
}

export default EmailSent