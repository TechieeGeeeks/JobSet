import React from 'react';
import { useSelector } from 'react-redux';

const UserInfoDashboard = () => {
  const { user } = useSelector(state => state.userProfile);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div>
        
      </div>
      <div className="bg-white p-4 rounded-b-md shadow-md">
        <p  className="py-2 text-lg font-bold rounded-t-md mb-6 text-lightPrimary">Personal Info</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h6 className=" font-bold">First name:</h6>
            <p className="text-sm text-lighttextGray">{user && user.firstName}</p>
          </div>
          <div>
            <h6 className=" font-bold">Middle name:</h6>
            <p className="text-sm text-lighttextGray">{user && user.middleName}</p>
          </div>
          <div>
            <h6 className=" font-bold">Last name:</h6>
            <p className="text-sm text-lighttextGray">{user && user.lastName}</p>
          </div>
          <div>
            <h6 className=" font-bold">E-mail:</h6>
            <p className="text-sm text-lighttextGray">{user && user.email}</p>
          </div>
          <div>
            <h6 className=" font-bold">Contact:</h6>
            <p className="text-sm text-lighttextGray">{user && user.contact}</p>
          </div>
          <div>
            <h6 className=" font-bold">Gender:</h6>
            <p className="text-sm text-lighttextGray">{user && user.gender}</p>
          </div>
          <div>
            <h6 className=" font-bold">State:</h6>
            <p className="text-sm text-lighttextGray">{user && user.state}</p>
          </div>
          <div>
            <h6 className=" font-bold">City:</h6>
            <p className="text-sm text-lighttextGray">{user && user.city}</p>
          </div>
          <div>
            <h6 className=" font-bold">Date of Birth:</h6>
            <p className="text-sm text-lighttextGray">{user && user.dateOfBirth.slice(0, 10)}</p>
          </div>
          <div colSpan="2">
            <h6 className=" font-bold">Status:</h6>
            <p className="text-sm text-lighttextGray">{user && (user.role === 0 ? 'Regular user' : 'Admin')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDashboard;