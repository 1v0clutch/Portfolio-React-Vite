import { useState } from 'react'
import sheesh from './assets/sheesh.JPG'
import { motion } from 'framer-motion';

function App() {

  return (
    <>
      <div className="min-h-screen w-screen bg-black-50 text-gray-950 font-sans">
      {/* Navigation Bar */}
        <nav className="bg-white shadow-lg p-4 sticky top-0">
          <div className='flex justify-center items-center max-w-6xl mx-auto'>
            <ul className="flex space-x-6 text-lg font-medium ml-5">
              <li className="hover:text-blue-600 cursor-pointer"><a href='#home' className='text-inherit no-underline'>Home</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#about' className='text-inherit no-underline'>About</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#projects' className='text-inherit no-underline'>Projects</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#contact' className='text-inherit no-underline'>Contact</a></li>
            </ul>
          </div>
        </nav>
        {/* Logos */}
        <section id='home' className="w-full min-h-screen px-6 md:px-12 py-16 scroll-mt-32">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left side */}
            <div className="space-y-6 p-24 ml-24">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Hi, I'm Steven.
              </h1>
              <h2 className="text-blue-600 font-bold text-2xl">
                I do Projects.
              </h2>
              <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
              onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}
              >
                See Projects
              </button>
            </div>

            {/* Right side image grid */}
            <div className="grid grid-cols-2 gap-6 p-12">
              <div className="row-span-2 bg-gray-200  rounded-lg"></div>
              <div className="bg-gray-200 aspect-[4/3] rounded-lg"></div>
              <div className="bg-gray-200 aspect-[4/3] rounded-lg"></div>
            </div>
          </div>          
        </section>
        <section id='about' className='w-full min-h-screen md:px-12 py-16 bg-white scroll-mt-15'>
          <h1 className="text-2xl font-bold">About</h1>
        </section>

        <section id='projects' className='w-full min-h-screen md:px-12 py-16 scroll-mt-15'>
          <div className="flex flex-col">
            <div className="flex items-center h-1/6">
              <h1 className="text-2xl font-bold">Top Destinations</h1>
            </div>

            <div className="grid grid-cols md:grid-cols-4 gap-6 p-16 h-5/6">
              <div className="bg-gray-200 aspect-[4/5] rounded-lg"></div>
              <div className="bg-gray-200 aspect-[4/5] rounded-lg"></div>
              <div className="bg-gray-200 aspect-[4/5] rounded-lg"></div>
              <div className="bg-gray-200 aspect-[4/5] rounded-lg"></div>
            </div>
          </div>
        </section>

        <section id='contact'>
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Left side */}
              <p className="text-sm">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
              </p>
              
              {/* Right side */}
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>
        </section>
    </div>
    </>
  )
}

export default App
