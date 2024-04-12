import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/Contacts';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link to="/portfolio" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
                  <Link to="/experience" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
                  <Link to="/contact" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="/portfolio" className="text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
              <Link to="/experience" className="text-white block px-3 py-2 rounded-md text-base font-medium">Experience</Link>
              <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


