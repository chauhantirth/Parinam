import React from 'react'
import ENV from './constants';

const footer = () => {
  return (
    <div className=''>
        <center>
        <p className='text-[18px] font-saira font-regular'>
            {ENV.footerText}
        </p>
        </center>
    </div>
  )
}

export default footer