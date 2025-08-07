import { useState } from 'react'
import reactLogo from './assets/react.svg'
import sheesh from './assets/sheesh.JPG'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen w-screen bg-black-50 text-gray-950 font-sans">
      {/* Navigation Bar */}
        <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
          <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <ul className="flex space-x-6 text-lg font-medium ml-5">
              <li className="hover:text-blue-600 cursor-pointer"><a href='#home' className='text-inherit no-underline'>Home</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#about' className='text-inherit no-underline'>About</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#projects' className='text-inherit no-underline'>Projects</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#contact' className='text-inherit no-underline'>Contact</a></li>
            </ul>
            <ul className="flex space-x-6 text-lg font-medium mr-5">
              <li className="hover:text-blue-600 cursor-pointer"><a href='#home' className='text-inherit no-underline'>Test</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#about' className='text-inherit no-underline'>Test</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#projects' className='text-inherit no-underline'>Test</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href='#contact' className='text-inherit no-underline'>Test</a></li>
            </ul>
          </div>
        </nav>
        <section id='home' className='scroll-mt-32'>
        {/* Logos */}
        <div className='flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-125px)] px-4 gap-20'>
            <div className='leftContainer max-w-xl text-center md:text-left'>
              <div className="flex justify-center items-center gap-10 mt-10">
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  <img src={viteLogo} className="w-24 hover:scale-110 transition" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  <img src={reactLogo} className="w-24 hover:scale-110 transition" alt="React logo" />
                </a>
              </div>

              {/* Title */}
              <h1 className="text-4xl text-center mt-10 text-blue-600 font-bold">
                Vite + React + Tailwind
              </h1>

              {/* Counter Card */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-blue-200 text-black px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  count is {count}
                </button>
                <p className="mt-3 text-gray-500">
                  Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR.
                </p>
            </div>

            {/* Docs Note */}
            <p className="text-center mt-10 text-sm text-gray-400">
              Click on the logos to learn more about Vite and React.
            </p>
          </div>
          
          <div className='rightContainer flex justify-center items-center'>
            <img src={sheesh} className='w-full max-w-md h-auto border' alt="Your Image" />
          </div>
      </div>
    </section>
    <section id='about'>
      <div className='flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-125px)] gap-20'>
            <div className='leftContainer w-2/5 md:w-1/2 h-screen flex justify-center items-center bg-blue-100'>
              <img src={sheesh} className='w-full max-w-md h-auto border' alt="Your Image" />
            </div>
            <div className='rightContainer w-3/5 justify-center items-center text-center md:text-left'>

              {/* Title */}
              <h1 className="text-4xl text-center mt-10 text-blue-600 font-bold">
                Vite + React + Tailwind
              </h1>

            <p className="text-center mt-10 text-sm text-gray-400">
              Click on the logos to learn more about Vite and React.
            </p>
          </div>
          

      </div>
    </section>
    <section id='projects'>
      <div className='min-h-screen w-full flex justify-center items-center'>

         <div className='flex gap-8'>
          <div className='h-120 w-90 border outline rounded-xl p-4'>
            <img src={sheesh} className='h-90 w-full max-w-md border' alt="Your Image" />
            <p className='text-center'>Testing</p>
          </div>
          <div className='h-120 w-90 border outline rounded-xl p-4'>
            <img src={sheesh} className='h-90 w-full max-w-md border' alt="Your Image" />
            <p className='text-center'>Testing</p>
          </div>
        
          <div className='h-120 w-90 border outline rounded-xl p-4'>
            <img src={sheesh} className='h-90 w-full max-w-md border' alt="Your Image" />
            <p className='text-center'>Testing</p>
          </div>
        </div>
      </div>
    </section>
    
    <section id='contact'>
      <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='border outline rounded-xl p-4'>
          <p>Testing</p>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default App
