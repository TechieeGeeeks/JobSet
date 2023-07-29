import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAction } from '../../redux/actions/userAction';

const CardElement = ({ jobTitle, description, category, location, id, salary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col space-y-2">
        <h5 className="text-xl font-bold">{jobTitle}</h5>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      <p className="text-sm mb-2">{category}</p>
      <p className="text-base">
        Description: {description.split(' ').slice(0, 15).join(' ') + '...'}
      </p>
      <div className="flex justify-end mt-4">
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl ">{salary}</p>
          <p className="text-gray-600">/month</p>
        </div>
        <a
          href={`/job/${id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 text-sm font-medium"
        >
          More Details
        </a>
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
    <div className="bg-blue-900 p-6 rounded">
      <h4 className="text-white text-2xl pb-3">Jobs History</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userInfo.user &&
          userInfo.user.jobsHistory.map((history, i) => (
            <CardElement
              key={i}
              id={history._id}
              jobTitle={history.title}
              description={history.description}
              category=""
              location={history.location}
              salary={history.salary}
            />
          ))}
      </div>
    </div>
  );
};

export default UserJobsHistory;
