import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h1 className='text-4xl md:text-6xl text-white font-bold mb-6'>Contact Me</h1>
            <p className='text-white text-lg mb-6'>Feel free to reach out to me through any of the following channels:</p>
            <div className='space-y-4'>
              <p className='text-white flex items-center'><span className='material-icons text-blue-600 mr-2'>mail</span>ihirweanitha07@gmail.com</p>
              <p className='text-white flex items-center'><span className='material-icons text-blue-600 mr-2'>mail</span>ihirweanitha08@gmail.com</p>
              <p className='text-white flex items-center'><span className='material-icons text-blue-600 mr-2'>phone</span>0786182413</p>
              <p className='text-white flex items-center'><span className='material-icons text-blue-600 mr-2'>place</span>Kigali, RWANDA</p>
            </div>
          </div>

          <div>
            <h2 className='text-3xl md:text-4xl text-white font-bold mb-6'>Send me a Message</h2>
            <form>
              <div className='space-y-2 mb-4'>
                <label htmlFor='name' className='block text-white'>Your Name:</label>
                <input type='text' id='name' name='name' className='rounded-md p-2 w-full' />
              </div>
              <div className='space-y-2 mb-4'>
                <label htmlFor='email' className='block text-white'>Your Email:</label>
                <input type='email' id='email' name='email' className='rounded-md p-2 w-full' />
              </div>
              <div className='space-y-2 mb-4'>
                <label htmlFor='phone' className='block text-white'>Phone Number:</label>
                <input type='tel' id='phone' name='phone' className='rounded-md p-2 w-full' />
              </div>
              <div className='space-y-2 mb-4'>
                <label htmlFor='subject' className='block text-white'>Subject:</label>
                <input type='text' id='subject' name='subject' className='rounded-md p-2 w-full' />
              </div>
              <div className='space-y-2 mb-4'>
                <label htmlFor='message' className='block text-white'>Message:</label>
                <textarea id='message' name='message' rows='4' className='rounded-md p-2 w-full'></textarea>
              </div>
              <div className='mb-4'>
                <label htmlFor='privacy' className='flex items-center text-white'>
                  <input type='checkbox' id='privacy' name='privacy' className='mr-2' />
                  <span>I agree to the privacy policy</span>
                </label>
              </div>
              <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-md'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

