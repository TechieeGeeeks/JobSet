import React, { useState } from "react";
import ProfileImage from "../img/user_profile_image.png";
import DownArrow from "../img/down_arrow.svg"
import EditProfileIcon from "../img/edit_profile_icon.svg"
import LogOutIcon from "../img/logout_icon.svg"
import SettingsIcon from "../img/settings_icon.svg"
import MenuIcon from "../img/menu_icon.svg"

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const isLoggedIn = false;
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    const dropDownHandle = () => {
        setIsMenu(!isMenu);
    }


    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <div to={"/"} className="flex items-center gap-2">
                    <p className="text-lightModeTextColor text-2xl "><span className="font-semibold">Job</span>Set</p>
                </div>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-10">
                        <li
                            className={`text-lg text-lightModeTextColor hover:text-lightPrimary cursor-pointer ${selectedItem === 0 ? ' text-lightPrimary' : ''
                                }`}
                            onClick={() => handleItemClick(0)}
                        >
                            <span className="relative">
                                Home
                                {selectedItem === 0 && (
                                    <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                )}
                            </span>
                        </li>
                        <li
                            className={`relative text-lg text-lightModeTextColor hover:text-lightPrimary cursor-pointer ${selectedItem === 1 ? ' text-lightPrimary' : ''
                                }`}
                            onClick={() => handleItemClick(1)}
                        >
                            <span className="relative">
                                Find Job
                                {selectedItem === 1 && (
                                    <span className="border-b-2 ease-in-out border-lightPrimary animate-border-animation"></span>
                                )}
                            </span>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li className="flex gap-3 text-sm text-lightModeTextColor hover:text-lightPrimary cursor-pointer" onClick={dropDownHandle}>
                                    <img src={ProfileImage} className="w-12 min-w-[40px] h-12 min-h-[40px] cursor-pointer rounded-full" alt="profile_picture" />
                                    <div className="flex flex-col justify-center">
                                        <div>vwakesahu</div>
                                        <div className="text-lighttextGray text-sm -mt-1">Ui/Ux Designer</div>
                                    </div>
                                    <img src={DownArrow} alt="drop_down_menu" />
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="text-lg text-lightModeTextColor hover:text-lightPrimary duration-100 transition-all ease-in-out cursor-pointer">
                                    Login
                                </li>
                                <li className="rounded-full border border-lightPrimary py-3 px-9 text-lg text-lightModeTextColor hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer">
                                    Register Now
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="relative">
                        {isMenu && (
                            <div
                                className="w-[200px] bg-lightCard drop-shadow-lg rounded-lg flex flex-col absolute top-8 right-7 py-2"
                            >
                                <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                                    <img src={EditProfileIcon} className="pl-1" alt="logout_icon" />
                                    <p
                                        className="w-full flex items-center justify-center gap-3"
                                    >
                                        Edit Profile
                                    </p>
                                </div>

                                <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                                    <img src={SettingsIcon} className="pl-1" alt="logout_icon" />
                                    <p
                                        className="w-full flex items-center justify-center gap-3"
                                    >
                                        Settings
                                    </p>
                                </div>

                                <div className="flex px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-lightModeTextColor">
                                    <img src={LogOutIcon} className="pl-1" alt="logout_icon" />
                                    <p
                                        className="w-full flex items-center justify-center gap-3 text-red-600"
                                    >
                                        Log out
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>




            {/* mobile */}
            <div className="md:hidden flex items-center justify-between w-full h-full ">

                <div to={"/"} className="flex items-center w-full justify-center">
                    <p className="text-lightModeTextColor text-xl "><span className="font-semibold">Job</span>Set</p>
                </div>

                <div className="relative">
                    {isLoggedIn ? (
                        <img
                            // whileTap={{ scale: 0.6 }}
                            src={ProfileImage}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="userprofile"
                            onClick={dropDownHandle}
                        />) : (
                        <img
                            // whileTap={{ scale: 0.6 }}
                            src={MenuIcon}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="menu"
                            onClick={dropDownHandle}
                        />
                    )}

                    {isMenu && (
                        <div
                            // initial={{ opacity: 0, scale: 0.6 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                        >




                            <ul className="flex flex-col ">
                                <li
                                    className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Home
                                </li>
                                <li
                                    className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Find Job
                                </li>
                                {isLoggedIn ? (<div><li
                                    className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Edit Profile
                                </li>
                                    <li
                                        className="text-base text-lightModeTextColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                        onClick={() => setIsMenu(false)}
                                    >
                                        Settings
                                    </li></div>) : ('')}

                            </ul>


                            <p
                                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-lightPrimary gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-lightCard text-base"

                            >
                                {isLoggedIn ? ('Log out') : ('Login / Sign Up')}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;