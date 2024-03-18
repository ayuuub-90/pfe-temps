import React, { useState } from 'react';
import { EnvelopeFill, GeoAltFill, Phone, PhoneFill } from 'react-bootstrap-icons';
import { useRegisterContactMutation } from '../redux/api/ContactUsApiSlice';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';




export default function Contact() {
    const [firstname , setFirstName] = useState("");
    const [lastname , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
    const [registerContact] = useRegisterContactMutation();
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
   
    const submitHandler = async (e) => {
        e.preventDefault()
        if (!emailRegex.test(email) || email.length === 0) {
            return toast.error("invaldi email format")
        }
        if ( firstname.length === 0 || reason.length === 0 || message.length === 0 || lastname.length === 0) {
            return toast.error("Please fill all the fields")
        }
        
    try {
        const res = await registerContact({
            firstname: firstname,
            lastname: lastname,
            email: email,
            reason: reason,
            message: message
            
        })
        console.log(res.data)
        setFirstName("");
        setLastName("");
        setEmail("");
        setReason("");
        setMessage("");
    } catch (error) {
        toast.error(error?.data?.message || error.message);
    }
    
    } 
    return (  <section className="contact-section bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">Contactez-nous</h2>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
        <div className="relative">
          <img src="https://images.pexels.com/photos/4464815/pexels-photo-4464815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Contact" className="w-full h-64 object-cover rounded-md opacity-50" />
          <h1 className="text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray z-10">AVEZ-VOUS BESOIN DE NOUS CONTACTER?</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-10">
         </div>
          <div className="flex flex-col">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" />
              <span>123 Street, New York, USA</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-2" />
              <span>info@example.com</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-2" />
              <span>+012 345 67890</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <form className="max-w-md mx-auto" onSubmit={submitHandler}>
            <div className="mb-6">
              <input type="text" placeholder="first name " className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
             value={firstname}
             onChange={(e)=> setFirstName(e.target.value)} />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="last name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
               value={lastname}
               onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            <div className="mb-6">
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Reason" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={reason}
              onChange={(e)=> setReason(e.target.value)} />
            </div>
            <div className="mb-6">
              <textarea placeholder="Content" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
    }
    

    
