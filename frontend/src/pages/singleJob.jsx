import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import { jobLoadSingleAction } from '../redux/actions/jobAction';
import { userApplyJobAction } from '../redux/actions/userAction';

const SingleJob = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector(state => state.singleJob);
  const { id } = useParams();

  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const applyForAJob = () => {
    dispatch(userApplyJobAction({
      title: singleJob && singleJob.title,
      description: singleJob && singleJob.description,
      salary: singleJob && singleJob.salary,
      location: singleJob && singleJob.location
    }));
  };

  return (
    <>
      <div className='hidden md:flex w-screen items-center justify-center'></div>
      <div className='bg-gray-100 min-h-screen'>
        <div className='py-10'>
          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='px-4 py-8 sm:px-0'>
              {loading ? (
                <LoadingBox />
              ) : (
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div className='bg-white p-4 rounded-md shadow-md'>
                    <h5 className='text-xl font-bold mb-2'>{singleJob && singleJob.title}</h5>
                    <p className='text-gray-600 mb-2'>Salary: ${singleJob && singleJob.salary}</p>
                    <p className='text-gray-600 mb-2'>Location: {singleJob && singleJob.location}</p>
                    <p className='text-gray-800'>{singleJob && singleJob.description}</p>
                  </div>
                  <div className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'>
                    <button
                      onClick={applyForAJob}
                      className='bg-blue-500 text-white px-3 py-1 rounded-lg'
                    >
                      Applied
                    </button>
                  </div>
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
