import React, { useEffect, useState } from 'react';
import { useProSidebar, Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import logoDashboard from '../../images/hr-project.png';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

// Importing Avatar component from MUI
import Avatar from '@mui/material/Avatar';

const SidebarAdm = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const { userInfo } = useSelector((state) => state.signIn);
  const { collapsed } = useProSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  //log out
  const logOut = async () => {
    await dispatch(userLogOutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  // For Selecting Menu Items I have used route to determine which page we are on and according to that, changing color
  const getMenuItemClass = (route) => {
    return location.pathname === route ? 'text-lightPrimary' : 'hover:text-lightPrimary';
  };


  // For Changing Color
  useEffect(() => {
    setActiveMenuItem(null); // Reset the active menu item on route change
  }, [location.pathname]);

  return (
    <Sidebar className=' ' style={{ borderRightStyle: 'none' }}>
      <div className="flex flex-col h-full">
        <div className="py-5 flex justify-center transition-all duration-500">
          {collapsed ? (
            <Avatar
              className="transform scale-75 opacity-50 hover:scale-100 hover:opacity-100 cursor-pointer"
              alt="logo dashboard"
              src={logoDashboard}
            />
          ) : (
            <div className="flex justify-center">
              {/* <img
                className="w-100 h-100 transform scale-75 opacity-50 hover:scale-100 hover:opacity-100 cursor-pointer transition-all duration-500"
                src={logoDashboard}
                alt="logo dashboard"
              /> */}
            </div>
          )}
        </div>

        <Menu>
          {userInfo && userInfo.role === 1 ? (
            <>
              <MenuItem
                className={getMenuItemClass('/admin/dashboard')}
                component={<Link to="/admin/dashboard" />}
                icon={<DashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                className={getMenuItemClass('/admin/users')}
                component={<Link to="/admin/users" />}
                icon={<GroupAddIcon />}
              >
                Users
              </MenuItem>
              <MenuItem
                className={getMenuItemClass('/admin/jobs')}
                component={<Link to="/admin/jobs" />}
                icon={<WorkIcon />}
              >
                Jobs
              </MenuItem>
              <MenuItem
                className={getMenuItemClass('/admin/category')}
                component={<Link to="/admin/category" />}
                icon={<CategoryIcon />}
              >
                Category
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                className={getMenuItemClass('/user/dashboard')}
                component={<Link to="/user/dashboard" />}
                icon={<DashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                className={getMenuItemClass('/user/jobs')}
                component={<Link to="/user/jobs" />}
                icon={<WorkHistoryIcon />}
              >
                Applied Jobs
              </MenuItem>
              <MenuItem
                className={getMenuItemClass('/user/info')}
                component={<Link to="/user/info" />}
                icon={<Person3Icon />}
              >
                Personal Info
              </MenuItem>
            </>
          )}
        </Menu>

        <Menu>
          <MenuItem onClick={logOut} className="hover:text-red-600" icon={<LoginIcon />}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarAdm;
