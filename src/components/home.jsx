import React from 'react';
import Anitha from '../images/anitha5.png';
import quizz from '../images/quiz.png';
import photo from '../images/photo1.png';
import free from '../images/freelance.jpg';

function Home() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-800'>
        <div className='p-8 md:px-12 md:py-10'>
          <h1 className='text-4xl md:text-6xl text-white'>Hello</h1>
          <h1 className="text-4xl md:text-6xl px-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600 mt-6">I'm Anitha IHIRWE</h1>
          <p className='text-white mt-6'>As a developer, you're not just writing code; you're shaping the future. You have the power to create solutions that improve efficiency, enhance user experiences, and make the world a better place. Your journey as a developer is not just a career; it's a mission to drive progress and innovation in the digital age.</p>
          <button className='mt-6 border-2 rounded-xl text-black p-2 px-6 bg-white'>More</button>
        </div>
        <div className='w-full md:w-1/2 ml-auto'>
          <img src={Anitha} alt='' className='w-full ml-auto mb-12 md:mb-0 md:mr-12' />
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-4xl md:text-6xl text-center'>ABOUT</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2'>
          <div className='p-8 md:px-12 md:py-10'>
            <img src={Anitha} alt='' className='w-full ml-auto mb-12 md:mb-0 md:mr-12' />
          </div>
          <div className='p-8 md:px-12 md:py-10'>
            <div className='flex flex-col md:flex-row gap-10'>
              <div>
                <p className='mt-6'><span className='font-bold'>Name: </span>Anitha IHIRWE</p>
                <p className='mt-4'><span className='font-bold'>Age: </span>25</p>
                <p className='mt-4'><span className='font-bold'>Email: </span>ihirweanitha07@gmail.com </p>
                <p className='mt-4'><span className='font-bold'>Phone:</span> 0786182413</p>
              </div>
              <div>
                <p className='mt-6 '><span className='font-bold'>City: </span>Kigali, RWANDA</p>
                <p className='mt-4'><span className='font-bold'>Website: </span>www.idatech.rw</p>
                <p className='mt-4'><span className='font-bold'>Freelance:</span> Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-4xl md:text-6xl text-center'>Portfolio</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Quiz project</h2>
            <p>This project is about online question and answers</p>
            <img src={quizz} alt='' className='mt-4' />
            <button className='bg-blue-600 text-white mt-6 border-2 w-32 py-2 rounded-xl'>View</button>
          </div>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Buffer diares</h2>
            <p>This project is about online question and answers</p>
            <img src={photo} alt='' className='mt-4' />
            <button className='bg-blue-600 text-white mt-6 border-2 w-32 py-2 rounded-xl'>View</button>
          </div>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Freelance project</h2>
            <p>This project is about online question and answers</p>
            <img src={free} alt='' className='mt-4' />
            <button className='bg-blue-600 text-white mt-6 border-2 w-32 py-2 rounded-xl'>View</button>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-4xl md:text-6xl text-center'>Experience</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Java Development</h2>
            <p>I offer Java development services for building robust and scalable applications tailored to your needs.</p>
            <button className='bg-blue-600 text-white mt-4 px-6 py-2 rounded-xl'>Learn More</button>
          </div>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Tailwind CSS Styling</h2>
            <p>Get professionally styled websites using Tailwind CSS framework for a modern and responsive design.</p>
            <button className='bg-blue-600 text-white mt-4 px-6 py-2 rounded-xl'>Learn More</button>
          </div>
          <div className='bg-white rounded-lg p-6 border-2'>
            <h2 className='text-xl font-bold'>Python Scripting</h2>
            <p>Utilize Python scripting services for automation, data analysis, web scraping, and more.</p>
            <button className='bg-blue-600 text-white mt-4 px-6 py-2 rounded-xl'>Learn More</button>
          </div>
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

export default Home;
