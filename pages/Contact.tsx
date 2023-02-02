import React from "react";
import emailjs from "@emailjs/browser";

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
    <div>
      <form onSubmit={sendEmail}>
        <label>Name </label>
        <input type="text" name="name" />
        <br />
        <br />
        <label>Mobile Number </label>
        <input type="text" name="phone" />
        <br />
        <br />
        <label>Email </label>
        <input type="email" name="email" />
        <br />
        <br />
        <label>Message </label>
        <textarea name="message" />
        <br />
        <br />
        <input
          style={{ padding: "10px 20px", marginLeft: "20px" }}
          type="submit"
          value="Send"
        />
      </form>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5163963723935!2d90.46056751498229!3d23.80022948456473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bb01cb9fb3%3A0x3aa52208c4cf7f33!2sBJIT%20Limited%20-%20Head%20Office!5e0!3m2!1sen!2sbd!4v1675305693137!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{border:'0'}}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
