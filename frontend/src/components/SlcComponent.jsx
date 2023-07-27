import React from 'react';
import { useSelector } from 'react-redux';

const SlcComponent = ({ handleChangeCategory, cat }) => {
  const { jobType } = useSelector(state => state.jobTypeAll);

  return (
    <div className="min-w-120">
      <label htmlFor="category" className="block mb-1">
        Filter
      </label>
      <select
        id="category"
        value={cat}
        onChange={handleChangeCategory}
        className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">All</option>
        {jobType &&
          jobType.map(jt => (
            <option key={jt._id} value={jt._id}>
              {jt.jobTypeName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SlcComponent;
