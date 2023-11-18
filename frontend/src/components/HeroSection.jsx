import React from "react";
import HeroBg from '../img/hero_bg.png'
import SearchInputEl from "./SearchInput";

const HeroSection = () => {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
            id="home"
        >
            <div className="flex-1 flex flex-col items-start justify-center gap-6 p-8">


                <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
                    <span className="text-lightPrimary text-[3rem] lg:text-[4rem]">JobSet</span> hai, toh life set hai!
                </p>

                <p className="text-center md:text-justify text-lighttextGray text-sm md:w-[85%] flex flex-wrap gap-1">
                
                Welcome to our global community of professionals! With a reputation built on trust, JobSet is the go-to platform for thousands of employees and employers worldwide. Whether you're seeking exciting career opportunities or top-tier talent, join us in shaping the future of work together.               </p>
                

                {/*
                <div className="text-center md:w-[85%] flex flex-wrap gap-1 md:gap-3">
                    <input type="text" className="md:w-3/4 border px-2 py-3 rounded-lg " placeholder="Search Jobs"/>
                    <button className="bg-lightPrimary text-lightCard md:px-7 px-4 py-3   text-sm rounded-lg">Search</button>
                </div>
                */}
                <div className='md:hidden flex flex-col items-center justify-center gap-6 '>
                    <SearchInputEl />
                </div>

                <div className='md:flex hidden'>
                    <SearchInputEl />
                </div>


            </div>
            <div className="flex-1 flex items-center relative -mt-24 md:mt-0">
                <img
                    src={HeroBg}
                    className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
                    alt="hero-bg"
                />
            </div>



        </section>

    );
};

export default HeroSection;
