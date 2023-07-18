import React from 'react'

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
        </div>
      </div>
    </section>
  )
}

export default Demo