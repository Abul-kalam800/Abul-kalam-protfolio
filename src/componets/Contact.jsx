import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    // emailjs.send(serviceID, templateID, templateParams, options);
    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "abul_kalam_web",
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
     
        setEmail("");
        setName("");
        setMessage("");
       
        if (result.status == 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your mail has been successfully send",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      (error) => {
        alert("Something went wrong, please try again!");
        console.log(error);
      }
    );
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6" id="contact">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 bg-base-200 shadow-lg rounded-2xl p-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="">
            Feel free to reach out via the form or through my contact info
            below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span className="">bd.abulkalam@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" />
              <span className="">+974 55100368</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="text-green-500" />
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows="5"
            cols="20"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
