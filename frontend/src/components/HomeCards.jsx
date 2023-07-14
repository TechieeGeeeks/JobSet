import React from 'react';
import TeslaImg from '../img/tesla_img.png'
import SpotifyImg from '../img/spotigy_img.png'
import SonyImg from '../img/sony_img.png';
import ibmlogo from '../img/ibmlogo.png'



const posts = [
  {
    id: 1,
    company: 'IBM Technologies',
    location: 'Mumbai, Maharashtra',
    jobTitle: 'Full Stack Developer',
    employmentType: 'Full Time',
    description: 'Must be ready for Designing user interactions on websites, developing servers, and databases for website functionality, and coding for mobile platforms.',
    salary: '₹0',
    image: ibmlogo
  },

  {
    id: 2,
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    jobTitle: 'Ui/Ux Designer',
    employmentType: 'Part Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
    salary: '₹15,00',
    image: SpotifyImg
  },

  {
    id: 3,
    company: 'Sony Playstation',
    location: 'San Mateo, California',
    jobTitle: 'Game Developer',
    employmentType: 'Full Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
    salary: '₹80,000',
    image: SonyImg
  },

  {
    id: 4,
    company: 'TESLA INC.',
    location: 'Mumbai, Maharashtra',
    jobTitle: 'Mechanic',
    employmentType: 'Full Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
    salary: '₹80,000',
    image: TeslaImg
  },

  {
    id: 5,
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    jobTitle: 'Ui/Ux Designer',
    employmentType: 'Part Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
    salary: '₹15,00',
    image: SpotifyImg
  },

  {
    id: 6,
    company: 'Sony Playstation',
    location: 'San Mateo, California',
    jobTitle: 'Game Developer',
    employmentType: 'Full Time',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.',
    salary: '₹80,000',
    image: SonyImg
  },

];

const HomeCards = () => {
  const isMediumScreen = window.innerWidth >= 768; 
  const visiblePosts = isMediumScreen ? posts.slice(0, 6) : posts.slice(0, 3);
  
  return (
    <div className="w-full h-full bg-lightBgBlue">
      <div className="p-9 md:p-16 h-full">
        <p className="text-[1.8rem] font-semibold"><span className="text-lightPrimary">Recent</span> Posts</p>
        <div className="h-full w-full grid md:grid-cols-3 gap-6 my-6 md:px-16">
          {visiblePosts.map(post => (
            <div key={post.id} className="md:w-300 p-8 min-w-260 bg-lightCard backdrop-blur-md rounded-3xl flex flex-col justify-center drop-shadow-lg gap-4 hover:bg-gray-300">
              <div className="flex">
                <img src={post.image} alt="logo" className="w-9 h-9 md:w-12 md:h-12" />
                <div className="mx-3">
                  <p className="md:text-[1rem] text-[0.8rem] font-medium">{post.company}</p>
                  <p className="md:text-[0.7rem] text-[0.6rem] text-lighttextGray">{post.location}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">{post.jobTitle}</p>
                <p className="text-[0.7rem] text-lighttextGray">{post.employmentType}</p>
              </div>
              <p className="text-[0.7rem] text-justify font-medium">{post.description}</p>
              <div className="flex justify-between pb-4 gap-3">
                <p className="text-[0.7rem] text-lighttextGray">
                  <span className="text-xl font-bold text-lightModeTextColor">{post.salary}</span>/month
                </p>
                <div className="md:text-[0.9rem] text-[0.7rem] rounded-lg bg-lightBgBlue py-2 px-5 text-lightPrimary font-medium hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                  Apply
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="md:text-[lg] text-sm text-right text-lightPrimary cursor-pointer hover:text-lightModeTextColor">View all</p>
      </div>
    </div>
  );
};

export default HomeCards;
