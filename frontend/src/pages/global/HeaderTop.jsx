import React from "react";
import { useNavigate } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";


const HeaderTop = () => {
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  // Handle back button click
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex-grow">
      <nav className="border-b-1 shadow-sm border-lighttextGray">
        <div className="max-w-7xl ml-4 mr-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => collapseSidebar()}
                className=" hover:text-lightPrimary focus:outline-none transition duration-300"
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
      {
      /*<button
          className=" bg-[#0d1bcf] text-white px-4 py-2 rounded-lg 	"
          onClick={handleGoBack}
        >
          Back
        </button> */
    }
    </div>
  );
};

export default HeaderTop;
