import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/Contacts';


function App() {
  return (
    < Router>
    <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="./" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="./" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                  <a href="" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                  <a href="/Contact" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
