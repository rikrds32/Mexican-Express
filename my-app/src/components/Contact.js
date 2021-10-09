import React from "react";

const Contact = () => {
    return (
        <section classNme="contact-section">
        <div className="container2">
            <form action="https://formspree.io/f/mzbywwpq"id="test-form" method="POST">

                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"></input>
                </div>

                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"></input>
                </div>

                <div className="form-group">
                    <label for="email">---Email---</label>
                    <input type="email" id="email" name="email"></input>
                </div>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" id="test-form-submit">Submit</button>
            </form>
        </div>
        <div id="status"></div>
        </section>
         
        
    )
}

export default Contact;