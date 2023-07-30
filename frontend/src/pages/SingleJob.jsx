import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import { jobLoadSingleAction } from '../redux/actions/jobAction';
import { userApplyJobAction } from '../redux/actions/userAction';

const SingleJob = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  useEffect(() => {
   dispatch(jobLoadSingleAction(id));
  }, [id]);

  const applyForAJob = () => {
    dispatch(
      userApplyJobAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
  };

  return (
    <>
      <div className="hidden md:flex w-screen items-center justify-center"></div>
      <div className="bg-gray-100 min-h-screen">
        <div className="py-10">
          <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              {loading ? (
                <div className="h-screen md:mt-36 flex justify-center">
                  <LoadingBox />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="bg-white p-4 rounded-md shadow-md">
                    <h5 className="text-xl font-bold mb-2 text-lightPrimary">
                      {singleJob && singleJob.title}
                    </h5>
                    <p className="text-lighttextGray mb-2 flex items-center ">
                      <p>Salary: </p>
                      <p className="font-bold text-lightModeTextColor text-lg">&nbsp;${singleJob && singleJob.salary}</p>
                    </p>
                    <p className="text-lighttextGray mb-2 flex items-center">
                      <p>Location: </p>
                      <p className="font-bold text-lightModeTextColor text-lg">&nbsp;{singleJob && singleJob.location}</p>
                       
                    </p>
                    <p className="text-lightModeTextColor">
                      {singleJob && singleJob.description}
                    </p>
                    <hr className='my-3'/>
                    <button
                      onClick={applyForAJob}
                      className="bg-lightPrimary hover:bg-lightBgBlue hover:text-lightModeTextColor text-white px-3 py-1 rounded-lg my-3"
                    >
                      Applied
                    </button>
                  </div>
                  {/*
                    <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
                    
                    </div>
              */}
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
