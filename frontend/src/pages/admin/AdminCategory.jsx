import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';

const AdminJobCategory = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const dispatch = useDispatch();
  const { jobType } = useSelector((state) => state.jobTypeAll);

  const handleItemHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItemId(null);
  };

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  return (
    <div className="dashboard p-6 max-w-md mx-auto border border-gray-300 rounded bg-blue-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Cool Dashboard</h2>
      <div className="job-list">
        {jobType &&
          jobType.map((job) => (
            <div
              className={`job-list-item p-4 rounded transition-all duration-300 ${
                hoveredItemId === job._id ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100'
              }`}
              key={job._id}
              onMouseEnter={() => handleItemHover(job._id)}
              onMouseLeave={handleItemLeave}
            >
              <div className="job-title font-semibold text-blue-900">{job.jobTypeName}</div>
              <div className="job-requirements text-gray-600">Requirements: {job.requirements}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminJobCategory;
