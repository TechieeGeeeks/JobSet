import React, { useState } from 'react'
import TeslaLogo from '../img/tesla_img.png'

const Demo = () => {



  const [fullTime, setFullTime] = useState(false);
  const [freelance, setFreelance] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [eL, setEL] = useState(false);
  const [interm, setInterm] = useState(false);
  const [exper, setExper] = useState(false);


  // handles check box's div 1
  const handleClearJType = () => {
    setFullTime(false);
    setFreelance(false);
    setPartTime(false);
  };


  // handles check box's div 2
  const handleClearExp = () => {
    setEL(false);
    setInterm(false);
    setExper(false);
  };



  //list Items
  const jobData = [
    {
      id: 1,
      logoSrc: TeslaLogo,
      title: 'Ui/Ux Designer',
      company: 'Tesla Inc.',
      type: 'Part Time',
      level: 'Intermediate',
      salary: '₹85,000',
    },
    {
      id: 2,
      logoSrc: TeslaLogo,
      title: 'Ui/Ux Designer',
      company: 'Tesla Inc.',
      type: 'Part Time',
      level: 'Intermediate',
      salary: '₹85,000',
    },
    {
      id: 3,
      logoSrc: TeslaLogo,
      title: 'Ui/Ux Designer',
      company: 'Tesla Inc.',
      type: 'Part Time',
      level: 'Intermediate',
      salary: '₹85,000',
    },


  ];




  return (
    <section>

      {/* For Desktops */}
      <div className='hidden md:flex h-screen w-screen items-center justify-center'>
        <div className='md:pt-60 lg:pt-40 p-16'>
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



          <div class="grid grid-cols-5 gap-10 mt-8">
            {/* Left Side */}
            <div class="col-span-1">
              <div className='flex flex-col gap-2'>
                <p>Filter</p>
                <input type="text" placeholder='Search Job' className='w-full p-3 border border-lighttextGray rounded-lg' />
                <div>
                  <div className='flex justify-between mt-8'>
                    <p className='text-lightPrimary font-medium'>Job Type</p>
                    <button onClick={handleClearJType} className=" decoration-inherit">
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label>
                      <input type="checkbox" className="rounded border-gray-400" checked={fullTime} onChange={() => setFullTime(!fullTime)} />
                      <span className="ml-6 font-medium">Full Time</span>
                    </label>
                    <label>
                      <input type="checkbox" className="rounded border-gray-400" checked={freelance} onChange={() => setFreelance(!freelance)} />
                      <span className="ml-6 font-medium">Freelance</span>
                    </label>
                    <label>
                      <input type="checkbox" className=" bg-lighttextGray " checked={partTime} onChange={() => setPartTime(!partTime)} />
                      <span className="ml-6 font-medium">Part Time</span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className='flex justify-between mt-6'>
                    <p className='text-lightPrimary font-medium'>Experience</p>
                    <button onClick={handleClearExp} className=" decoration-inherit">
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-col mt-6">
                    <label>
                      <input type="checkbox" className="rounded border-gray-400" checked={eL} onChange={() => setEL(!eL)} />
                      <span className="ml-6 font-medium">Entry Level</span>
                    </label>
                    <label>
                      <input type="checkbox" className="rounded border-gray-400" checked={interm} onChange={() => setInterm(!interm)} />
                      <span className="ml-6 font-medium">Intermediate</span>
                    </label>
                    <label>
                      <input type="checkbox" className=" bg-lighttextGray " checked={exper} onChange={() => setExper(!exper)} />
                      <span className="ml-6 font-medium">Experienced</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Side */}
            <div class="col-span-4">


              {/* Map through jobData to render job items */}
              {jobData.map((job) => (
                <div key={job.id} className="flex gap-10 items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4">
                  <img src={job.logoSrc} alt="tesla_logo" />
                  <div>
                    <p className="font-bold">{job.title}</p>
                    <p className="text-sm text-lighttextGray">{job.company}</p>
                  </div>
                  <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.type}</div>
                  <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.level}</div>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-2xl ">{job.salary}</p>
                    <p className="text-lighttextGray">/month</p>
                  </div>
                </div>
              ))}


            </div>
          </div>

        </div>
      </div>

      {/* For Mobile */}
      <div className='md:hidden flex flex-col w-screen h-screen pt-32'>
      <div className='flex flex-col items-center justify-center gap-6 px-8'>
            <div className='p-4 bg-lightCard shadow-xl rounded-full flex items-center justify-center'>
              <input type="text" placeholder='Job Title' className='w-1/2 h-full px-8 rounded-full outline-none' />
              <input type="text" placeholder='Location' className='w-1/2 h-full px-8 rounded-e-full border-l-2 outline-none' />
            </div>
            <button className='bg-lightPrimary text-lightCard p-4 px-12 rounded-full'>Search</button>
          </div>
      </div>


    
    </section>
  )
}

export default Demo