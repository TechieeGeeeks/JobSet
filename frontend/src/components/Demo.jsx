import React from 'react'
import TeslaLogo from '../img/tesla_img.png'

const Demo = () => {
  return (
    <section>
      <div className='h-screen'>
        <div className='pt-40 p-16'>
          <div className='flex items-center justify-center gap-6'>
            <div className='w-1/2 p-4 bg-lightCard shadow-xl rounded-full flex items-center justify-center'>
              <input type="text" placeholder='Job Title' className='w-1/2 h-full px-12 rounded-full outline-none' />
              <input type="text" placeholder='Location' className='h-full px-12 rounded-e-full border-l-2 outline-none' />
            </div>
            <button className='bg-lightPrimary text-lightCard p-4 px-12 rounded-full'>Search</button>
          </div>
          <div className='mt-9 flex w-full justify-between' >
            <div className=' px-8 py-3 rounded-full border'>Part Time</div>
            <div className=' px-8 py-3 rounded-full border'>Remote</div>
            <div className=' px-8 py-3 rounded-full border'>Designer</div>
            <div className=' px-8 py-3 rounded-full border'>Illustrator</div>
            <div className=' px-8 py-3 rounded-full border'>Manager</div>
            <div className=' px-8 py-3 rounded-full border'>Editor</div>
            <div className=' px-8 py-3 rounded-full border'>Junior Level</div>
            <div className=' px-8 py-3 rounded-full border'>Senior Level</div>
            <div className=' px-8 py-3 rounded-full border'>Developer</div>
          </div>
          <div className='mt-9 flex gap-6'>
            <div className='w-[35%]'>
              Filter
              <input type="text" />
              <div>
                <div className='flex justify-between'>
                  <p>Job Type</p>
                  <p>Clear</p>
                </div>
              </div>
            </div>
            <div className='flex gap-5 items-center justify-center rounded-2xl border px-16 py-6'>
              <img src={TeslaLogo} alt="tesla_logo" />
              <div>
                <p className='font-bold'>Ui/Ux Designer</p>
                <p className='text-sm text-lighttextGray'>Tesla Inc.</p>
              </div>
              <div className=' px-8 py-3 rounded-full border bg-lightBgBlue font-light'>Part Time</div>
              <div className=' px-8 py-3 rounded-full border  bg-lightBgBlue font-light'>Intermediate</div>
              <div className='flex items-center justify-center'>
              <p className='font-bold text-2xl '>₹85,000</p>
              <p className='text-lighttextGray'>/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo