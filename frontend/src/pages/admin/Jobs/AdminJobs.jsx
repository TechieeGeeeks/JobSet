import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../../redux/actions/jobAction';
import { Link } from 'react-router-dom';

const AdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobLoadAction());
  }, []);

  const { jobs, loading } = useSelector((state) => state.loadJobs);
  let data = [];
  data = jobs !== undefined && jobs.length > 0 ? jobs : [];

  return (
    <div>
      <h4 className="text-black text-2xl pb-3">Jobs list</h4>
      <div className="pb-2 flex justify-end">
      <Link to={`/admin/job/create`}>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <span>Create Job</span>
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
      </Link>
        
      </div>
      <div className="bg-blue-900 shadow rounded">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Job ID</th>
              <th className="px-4 py-2">Job name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Available</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((job) => (
              <tr key={job._id} className="hover:bg-gray-200">
                <td className="px-4 py-2">{job._id}</td>
                <td className="px-4 py-2">{job.title}</td>
                <td className="px-4 py-2">{job.jobType.jobTypeName}</td>
                <td className="px-4 py-2">{job.user.firstName}</td>
                <td className="px-4 py-2">{job.available ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2">${job.salary}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                      <Link to={`/admin/edit/job/${job._id}`}>Edit</Link>
                    </button>
                    <Link to={`/admin/delete/job/${job._id}`}>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </Link>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJobs;
