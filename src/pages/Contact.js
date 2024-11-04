import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
   const form = useRef();
   const [isSending, setIsSending] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();
      setIsSending(true);

      emailjs
         .sendForm('service_lph1j5l', 'template_xm19rvn', form.current, 'E5nu5T6LELMppLGY9')
         .then(
            (result) => {
               console.log('Email sent successfully:', result.text);
               toast.success('Email sent successfully!', { position: "top-center" }); // Changed to top-center
            },
            (error) => {
               console.error('Error sending email:', error);
               toast.error(`Error sending email: ${error.text || 'Please check your configuration.'}`, { position: "top-center" }); // Changed to top-center
            }
         )
         .finally(() => {
            setIsSending(false);
         });
   };

   return (
    
      <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-6">
         {/* Contact Information Container */}
         {/* Contact Information Container */}
<div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full md:w-1/3 flex flex-col justify-between">
   <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Contact Information</h2>
   <div className="space-y-4 text-gray-700">
      {/* Phone Number */}
      <div className="flex items-center">
         <FaPhone className="text-blue-600 text-xl mr-3" /> {/* Increased icon size and added margin */}
         <span className="text-lg">6380792434</span>
      </div>
      {/* Email Address */}
      <div className="flex items-center">
         <FaEnvelope className="text-blue-600 text-xl mr-3" /> {/* Increased icon size and added margin */}
         <span className="text-lg">vigneshramesh2208@gmail.com</span>
      </div>
      {/* Address */}
      <div className="flex items-center">
         <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" /> {/* Increased icon size and added margin */}
         <span className="text-lg">N0 5 Sivanantha madam , Karaikudi, Tamilnadu</span>
      </div>
   </div>
</div>


         {/* Email Sending Form Container */}
         <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full md:w-1/2 flex flex-col justify-between"> {/* Changed to md:w-1/2 */}
   <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Contact Us</h2>
   <form ref={form} onSubmit={sendEmail} className="space-y-4 flex-grow">
      <div>
         <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
         <input
            type="text"
            name="user_name"
            className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            required
         />
      </div>
      <div>
         <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
         <input
            type="email"
            name="user_email"
            className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            required
         />
      </div>
      <div>
         <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
         <textarea
            name="message"
            className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            rows="4"
            required
         ></textarea>
      </div>
      <button
         type="submit"
         className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
         disabled={isSending}
      >
         {isSending ? 'Sending...' : 'Send'}
      </button>
   </form>
</div>
         {/* Toast Notifications */}
         <ToastContainer position="top-center" autoClose={3000} hideProgressBar /> {/* Changed to top-center */}
      </div>
   );
};

export default Contact;
