import React from 'react';
import { useState } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const HeaderTop = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="flex-grow">
      <nav className="border-b-1 shadow-sm border-lighttextGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => collapseSidebar()}
                className=" hover:text-lightPrimary focus:outline-none focus:text-white transition duration-300"
              >
                <MenuIcon />
              </button>
              <span className="ml-2 text-xl font-bold">HR APP</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
