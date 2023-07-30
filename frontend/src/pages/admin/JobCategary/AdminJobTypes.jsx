import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../../redux/actions/jobTypeAction';
import { Link } from 'react-router-dom';

const AdminJobTypes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const { jobType } = useSelector((state) => state.jobTypeAll);

  return (
    <div>
      <h4 className="text-black text-2xl pb-3">Job Categories</h4>
      <div className="pb-2 flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Link to='/admin/create/jobtype'>
            <span>Create Job Type</span>
          </Link>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="bg-blue-900 shadow rounded">
        <div className="job-list">
          {jobType && jobType.length > 0 ? (
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Job Type ID</th>
                  <th className="px-4 py-2">Job Type Name</th>
                  <th className="px-4 py-2">Requirements</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobType.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-200"
                  >
                    <td className="px-4 py-2">{job._id}</td>
                    <td className="px-4 py-2">{job.jobTypeName}</td>
                    <td className="px-4 py-2">{job.requirements}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                          <Link to={`/admin/edit/jobtype/${job._id}`}>Edit</Link>
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          <Link to={`/admin/delete/jobtype/${job._id}`}>Delete</Link>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-white px-4 py-2">No job types found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminJobTypes;
