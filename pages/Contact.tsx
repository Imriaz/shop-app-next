import React from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  //   const form = React.useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntm2szw",
        "template_my_template",
        e.target,
        "YRn9JCOVaAQWYcc3U"
      )
      .then(
        (result: any) => {
          alert(
            "Your Message has been successfully sent. I will contact you Soon."
          );
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Contact;
