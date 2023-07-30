import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAction } from '../../redux/actions/userAction';

const CardElement = ({ jobTitle, description, category, location, id, salary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col space-y-2">
        <h5 className="text-xl font-bold ">{jobTitle}</h5>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      <p className="text-base">
        Description: {description}
      </p>
      <div className="flex justify-end mt-4">
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl ">{salary}$</p>
          <p className="text-gray-600">/month</p>
        </div>

      </div>
      {/* Tracking Dots */}
      <div className="flex items-center space-x-4 mt-4">
        {/* Render different dots and ticks based on applicationStatus */}
        {category === 'pending' && (
          <>
            <div className="w-3 h-3 bg-lightPrimary rounded-full"></div>
            <div className="w-3 h-3 bg-lighttextGray rounded-full"></div>
            <div className="w-3 h-3 bg-lighttextGray rounded-full"></div>
          </>
        )}
        {category === 'accepted' && (
          <>
            <div className="w-3 h-3 bg-lightPrimary rounded-full"></div>
            <div className="w-3 h-3 bg-lightPrimary rounded-full"></div>
            <div className="w-3 h-3 bg-lighttextGray rounded-full"></div>
          </>
        )}
        {category === 'rejected' && (
          <>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-lighttextGray rounded-full"></div>
          </>
        )}
      </div>
      {/* Labels for Dots */}
      <div className="flex justify-between mt-2">
        <span className={`text-sm font-semibold ${category === 'pending' ? 'text-lightPrimary' : 'text-lightPrimary'}`}>
          Pending
        </span>
        <span className={`text-sm font-semibold ${category === 'accepted' ? 'text-green-600' : 'text-green-600'}`}>
          Accepted
        </span>
        <span className={`text-sm font-semibold ${category === 'rejected' ? 'text-red-500' : 'text-lighttextGray'}`}>
          Rejected
        </span>
      </div>
    </div>
  );
};



const UserJobsHistory = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  return (
    <div className="p-6 rounded">
      <h4 className="text-2xl font-semibold pb-8 text-lightPrimary ">Jobs History</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userInfo.user &&
          userInfo.user.jobsHistory.map((history, i) => (
            <CardElement
              key={i}
              id={history._id}
              jobTitle={history.title}
              description={history.description}
              category={history.applicationStatus} // Pass the applicationStatus as the category
              location={history.location}
              salary={history.salary}
            />
          ))}
      </div>
    </div>
  );
};

export default UserJobsHistory;
