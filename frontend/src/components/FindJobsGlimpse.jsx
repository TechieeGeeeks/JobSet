import React from 'react'
import WalkingGirl from '../img/walking_girl.png'
import { Link } from 'react-router-dom'

const FindJobsGlimpse = () => {

    //whenever page navigate to findJob should start from top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (

        <section
            className="md:px-16 grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
            id=""
        >
            <div className="mb-auto flex-1 flex flex-col items-start justify-center gap-11 md:gap-24 px-8 pb-8 md:p-0">


                <p className="text-[1.8rem] text-lightPrimary font-semibold"> Why Wait Start Now!</p>


                <div className='flex flex-col gap-4'>
                    <p className="text-lightModeTextColor text-center font-semibold md:text-justify md:w-[85%] flex-wrap text-xl">
                        Make Your Dreams Work: Find Your Dream Job
                    </p>
                    <p className="text-lightModeTextColor text-center text-sm md:text-justify md:w-[85%] flex-wrap">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    </p>
                </div>

                <div className='w-full flex justify-center md:hidden z-30'>
                    <Link to={'/findjob'}>
                        <button className='min-w-210 bg-lightPrimary w-300 p-4 rounded-full text-lightCard cursor-pointer hover:shadow-xl'
                            onClick={handleScrollToTop}>
                            Find Jobs
                        </button>
                    </Link>
                </div>

                <div className='hidden md:flex'>
                    <Link to={'/findjob'}>
                        <button
                            className='min-w-210 bg-lightPrimary w-300 p-4 rounded-full text-lightCard cursor-pointer hover:shadow-xl'
                            onClick={handleScrollToTop}
                        >
                            Find Jobs
                        </button>
                    </Link>

                </div>


            </div>
            <div className="image-container py-2 flex-1 flex items-center relative">
                <img
                    src={WalkingGirl}
                    className=" ml-auto h-420 w-full lg:w-auto lg:h-650 pb-16"
                    alt="hero-bg"
                />
            </div>



        </section>

    )
}

export default FindJobsGlimpse