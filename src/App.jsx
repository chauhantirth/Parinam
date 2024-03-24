import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import React from 'react';
import vectorCyan from './assets/images/vectorCyan.jpg';
import vectorCream from './assets/images/vectorCream.jpg';
import illustrationRead from './assets/images/IllustrationRead.jpg';


function App() {

  return (
    <>
    <section className='main'>
      <div className='w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            <Navbar/>
          </div>
        </div>

        <div className='sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            <Hero/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
