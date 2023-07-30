import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allUserAction } from '../../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  const { users, loading } = useSelector((state) => state.allUsers);
  let data = [];
  data = users !== undefined && users.length > 0 ? users : [];


  return (
    <div>
      <h4 className="text-black text-2xl pb-3">All users</h4>
      <div className="pb-2 flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Link to='/admin/create/user'>
            <span>Create Admin</span>
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
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">E_mail</th>
              <th className="px-4 py-2">User status</th>
              <th className="px-4 py-2">Creation date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id} className="hover:bg-gray-200">
                <td className="px-4 py-2">{user._id}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role === 1 ? 'Admin' : 'Regular user'}</td>
                <td className="px-4 py-2">{moment(user.createdAt).format('YYYY-MM-DD HH:MM:SS')}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                      <Link to={`/admin/edit/user/${user._id}`}>Edit</Link>
                    </button>
                    <Link to={`/admin/delete/user/${user._id}`}>
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

export default AdminUsers;
