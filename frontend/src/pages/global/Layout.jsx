import React from 'react';
import HeaderTop from './HeaderTop';
import SidebarAdm from './Sidebar';

const Layout = (Component) => ({ ...props }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <SidebarAdm />
        <div className="w-full">
          <HeaderTop />
          <div className="p-4">
            <Component {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
