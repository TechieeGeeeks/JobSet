import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const CardElement = ({ jobTitle, description, category, location, id, salary }) => {
    return (
        <div>
            <div className="hidden md:flex lg:gap-10 md:gap-2 items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4">

                <div className='flex flex-col'>
                    <h5 className="text-xl font-bold">{jobTitle}</h5>
                    <div className='flex '>
                        {/* <LocationOnIcon className="text-lighttextGray text-lg mr-1" /> */}
                        <p className="text-sm text-lighttextGray">{location}</p>
                    </div>
                </div>
                <p className="text-sm mb-2">{category}</p>
                <p className="text-base">
                    Description: {description.split(' ').slice(0, 15).join(' ') + '...'}
                </p>
                <div className="flex justify-end mt-4">

                    <div className="flex items-center justify-center">
                        <p className="font-bold text-2xl ">{salary}$</p>
                        <p className="text-lighttextGray">/Year</p>
                    </div>
                     <Link
                   to={`/job/${id}`}
               >
                   <button
                    className="bg-lightPrimary text-lightCard md:px-7 ml-4 px-2 py-2   text-sm rounded-lg"
                    type="submit"
                >
                    More Details
                </button>
               </Link> 
               
                </div>







                {/* <div key={job.id} className="flex lg:gap-10 md:gap-2 items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4">
                   <img src={job.logoSrc} alt="tesla_logo" />
                   <div>
                     <p className="font-bold">{job.title}</p>
                     <p className="text-sm text-lighttextGray">{job.company}</p>
                   </div>
                   <div className="md:hidden lg:visible lg:flex px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.type}</div>
                   <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.level}</div>
                   <div className="flex items-center justify-center">
                     <p className="font-bold text-2xl ">{job.salary}</p>
                     <p className="text-lighttextGray">/month</p>
                   </div>
                 </div> */}
            </div>




            {/* For mobile */}
            <div className="md:hidden flex flex-col lg:gap-10items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4 gap-2">

                <div className='flex flex-col '>
                    <div className='flex flex-col w-full items-center justify-center'>
                        <h5 className="text-xl font-bold">{jobTitle.slice(0,15) + (description.length > 15 ? '...' : '')}</h5>

                        {/* <LocationOnIcon className="text-lighttextGray text-lg mr-1" /> */}
                        <p className="text-sm text-lighttextGray text-center">{location}</p>
                    </div>
                </div>
                <p className="text-sm mb-2">{category}</p>
                <p className="text-base">
                    Description: {description.split(' ').slice(0, 15).join(' ') + '...'}
                </p>
                <div className="flex justify-end mt-4">

                    <div className="flex items-center justify-center">
                        <p className="font-bold text-2xl ">{salary}</p>
                        <p className="text-lighttextGray">/month</p>
                    </div>
                    {/* <Link
                   to={`/job/${id}`}
                   className="text-white bg-blue-500 px-4 py-2 rounded-md shadow-md text-sm font-medium"
               >
                   More Details
               </Link> */}
                </div>







                {/* <div key={job.id} className="flex lg:gap-10 md:gap-2 items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4">
                   <img src={job.logoSrc} alt="tesla_logo" />
                   <div>
                     <p className="font-bold">{job.title}</p>
                     <p className="text-sm text-lighttextGray">{job.company}</p>
                   </div>
                   <div className="md:hidden lg:visible lg:flex px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.type}</div>
                   <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.level}</div>
                   <div className="flex items-center justify-center">
                     <p className="font-bold text-2xl ">{job.salary}</p>
                     <p className="text-lighttextGray">/month</p>
                   </div>
                 </div> */}
            </div>
        </div>
    );
};

export default CardElement;
