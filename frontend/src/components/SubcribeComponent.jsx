import React from 'react'

const SubcribeComponent = () => {
  return (
    <div className="flex items-center justify-center">
          <div className='absolute hidden bg-lightCard py-10 px-64 rounded-2xl md:flex items-center justify-center gap-9 shadow-2xl'>
            <div className='text-xl'>
              Subscribe To Our Newsletter
            </div>
            <div className='flex gap-1'>
              <input type="text" className='p-4 border border-black rounded-lg' placeholder='Enter Your Mail' />
              <button className='p-4 rounded-lg bg-lightPrimary text-lightCard'>Subscribe</button>
            </div>
          </div>
        </div>
  )
}

export default SubcribeComponent