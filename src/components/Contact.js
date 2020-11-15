import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 class="text-important">contact me</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="full name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
};

export default Contact;