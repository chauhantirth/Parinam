import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <>
    <section className={isSmallScreen ? 'main2' : 'main'}>
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

      <div className='sm:flex hidden'>
        <div className='fixed flex items-center w-full max-w-xs p-4 space-x-4 text-black-500 bg-[#FFFFFF] divide-x rtl:divide-x-reverse divide-white-200 rounded-[20px] shadow left-10 bottom-5 dark:text-black-400 dark:divide-white-700 space-x dark:bg-white-800'>
          <Footer/>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
