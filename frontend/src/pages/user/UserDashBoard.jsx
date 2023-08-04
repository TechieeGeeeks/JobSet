import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import StatComponent from '../../components/StatComponent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';

const UserDashboard = () => {
  const { userInfo } = useSelector((state) => state.signIn);

  return (
    <div className='p-6'>
      <h4 className="text-2xl pb-3 font-semibold text-lightPrimary">Dashboard</h4>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <StatComponent
          value={userInfo.user && moment(userInfo.user.createdAt).format('YYYY / MM / DD')}
          icon={
            <CalendarMonthIcon style={{ fontSize: 30, color: 'white'}} />
          }
          description="Member since"
          money=""
        />
        <StatComponent
          value={userInfo.user && userInfo.user.jobsHistory.length}
          icon={<WorkIcon className="" style={{ fontSize: 30, color: 'white' }} />}
          description="Number of jobs submitted"
          money=""
        />
      </div>
    </div>
  );
};

export default UserDashboard;
