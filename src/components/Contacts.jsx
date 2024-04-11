import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Contacts() {
  return (
    <>
    

      <div className='grid grid-cols-2 bg-black'>
      
        <div>
          <h1 className='text-6xl text-white px-12 mt-10'>Contact Me</h1>
          <p className='text-white ml-10 mt-6'>Feel free to reach out to me through any of the following channels:</p>
          <div className="ml-12 mt-6">
            <p className="text-white flex items-center"><span className="material-icons text-blue-600 mr-2">mail</span>ihirweanitha07@gmail.com</p>

            <p className="text-white flex items-center"><span className="material-icons text-blue-600 mr-2">mail</span>ihirweanitha08@gmail.com</p>
            <p className="text-white flex items-center"><span className="material-icons text-blue-600 mr-2">phone</span>0786182413</p>
            <p className="text-white flex items-center"><span className="material-icons text-blue-600 mr-2">place</span>Kigali, RWANDA</p>
          </div>
        </div>

       
        <div className='w-1/2 ml-12'>
          <h2 className='text-3xl text-white mb-4'>Send me a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Your Name:</label>
              <input type="text" id="name" name="name" className="rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Your Email:</label>
              <input type="email" id="email" name="email" className="rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-white">Phone Number:</label>
              <input type="tel" id="phone" name="phone" className="rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-white">Subject:</label>
              <input type="text" id="subject" name="subject" className="rounded-md p-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">Message:</label>
              <textarea id="message" name="message" rows="4" className="rounded-md p-2"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="privacy" className="flex items-center text-white">
                <input type="checkbox" id="privacy" name="privacy" className="mr-2" />
                I agree to the privacy policy
              </label>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-14">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div>
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p>Email: ihirweanitha07@gmail.com</p>
            <p>Phone: 0712345678</p>
            <p>City: Kigali, RWANDA</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#portfolio" className="text-blue-400 hover:text-blue-200">Portfolio</a></li>
              <li><a href="#services" className="text-blue-400 hover:text-blue-200">Services</a></li>
              
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-xl font-bold mb-2">Connect with Me</h3>
            <ul>
              <li><a href="#" className="text-blue-400 hover:text-blue-200">LinkedIn</a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-200">GitHub</a></li>
              
            </ul>
          </div>
        </div>
      </footer>
      
      




    </>
  );
}

export default Contacts;
