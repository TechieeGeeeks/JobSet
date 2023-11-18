import React from "react";
import Avatar from "../img/testimonial_2.jpg";
import Avatar2 from '../img/testimonial_1.jpg'


const Testimonials = () => {
    return (
        <div>
            <div>
                <div className="hidden md:flex">
                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full sm:m-12"
                        id="home"
                    >

                        {/* //left side */}
                        <div className=" py-2  relative h-420 w-full lg:h-650 ">
                            <div className="h-full flex gap-3">
                                <div className="w-1/2 gap-2 flex flex-col">
                                    {/* left */}
                                    <div className="w-full flex flex-col p-6 text-sm text-center border  rounded-e-xl rounded-b-xl gap-6">
                                        <p>
                                            "As an experienced UI/UX designer, I appreciate the precision and efficiency of JobSet. The platform understands the industry's nuances and connects me with opportunities that align with my expertise. It's become my go-to resource for staying ahead in the competitive design landscape."</p>
                                        <div className="flex w-full items-center justify-center gap-3">
                                            <img src={Avatar2} alt="" className="w-10 rounded-full" />
                                            <div className="flex flex-col items-start font-medium text-[1rem]">
                                                <p>Vivek Sahu</p>
                                                <p className="text-lightPrimary text-[0.7rem] leading-3">UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-full bg-lightBgBlue rounded-e-xl rounded-b-xl"></div>

                                </div>
                                <div className="w-1/2 full gap-2 flex flex-col">
                                    {/* right */}
                                    {/* Empty Card */}
                                    <div className="w-full h-[35%] bg-lightBgBlue rounded-e-xl rounded-b-xl"></div>
                                    <div className="w-full flex flex-col p-6 text-sm text-center border  rounded-e-xl rounded-b-xl gap-6">
                                        <p>
                                            "Joining JobSet was a turning point in my career. The tailored job recommendations and insightful articles helped me refine my skills and secure my first role as a UI/UX designer. The platform's user-centric approach mirrors the principles I apply in my design work. Grateful for the support in kickstarting my design journey!"
                                        </p>
                                        <div className="flex w-full items-center justify-center gap-3">
                                            <img src={Avatar} alt="" className="w-10 rounded-full" />
                                            <div className="flex flex-col items-start font-medium text-[1rem]">
                                                <p>Vivek Sahu</p>
                                                <p className="text-lightPrimary text-[0.7rem] leading-3">UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty Card */}
                                    <div className="w-full h-[35%] bg-lightBgBlue rounded-e-xl rounded-b-xl"></div>
                                </div>
                            </div>
                        </div>


                        {/* //right side */}
                        <div className="py-2 items-start justify-center gap-6 md:mt-24 p-8 w-[90%]">
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold text-lightPrimary">
                                    Testimonials
                                </div>
                                <div className="text-3xl font-bold">
                                    Trusted By Thousands of Employeees and Employers all across the
                                    globe
                                </div>
                                <div className="text-sm mt-8 text-lighttextGray text-justify">
                                At JobSet, we believe in connecting talent with opportunities that match their aspirations. Our platform is designed to simplify the job search and recruitment process, providing a seamless experience for both employers and job seekers. 

                                </div>
                            </div>
                        </div>
                    </section>
                </div>



                {/* for mobile */}
                <div>
                    <section className="md:hidden p-8">
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="text-sm font-medium text-lightPrimary">
                                    Testimonials
                                </div>
                                <div className="text-xl font-semibold mt-3">
                                    Trusted By Thousands of Employeees and Employers all across the
                                    globe
                                </div>
                            </div>
                            <div className="text-sm text-lighttextGray">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </div>
                        </div>
                        <div className="w-full flex flex-col p-6 text-sm text-center border  rounded-e-xl rounded-b-xl gap-6 mt-16">
                            <p>
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            </p>
                            <div className="flex w-full items-center justify-center gap-3">
                                <img src={Avatar2} alt="" className="w-10 rounded-full" />
                                <div className="flex flex-col items-start font-medium text-[1rem]">
                                    <p>Vivek Sahu</p>
                                    <p className="text-lightPrimary text-[0.7rem] leading-3">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonials