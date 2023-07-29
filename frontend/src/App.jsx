/* Require Imports */
import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Components */
import NavBar from './components/NavBar';
import Footer from './components/Footer';

/* Pages*/
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Resources from './pages/Resources'
import FindJob from './pages/FindJob'
import Policy from './components/Policy'
import Demo from './components/Demo';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';

import SingleJob from './pages/SingleJob';

/* Authentication Routes */
import UserRoute from './components/UserRoutes';
import AdminRoute from './components/AdminRoute'

// HOC 
import Layout from './pages/global/Layout';

/* Basic DashBoard*/
import UserDashBoard from './pages/user/UserDashBoard';
import AdminDashboard from './pages/admin/AdminDashboard';

/* User Sub Routes*/
import UserJobsHistory from './pages/user/UserJobHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';

/* Admin User Opeartions*/
import AdminUsers from './pages/admin/User/AdminUsers';
import AdminEditUser from './pages/admin/User/AdminEditUser';
import AdminDeleteUser from './pages/admin/User/AdminDeleteUser';
import AdminCreateuser from './pages/admin/User/AdminCreateuser';

/* Admin Job Opeartions*/
import AdminJobs from './pages/admin/Jobs/AdminJobs';
import AdminEditJob from './pages/admin/Jobs/AdminEditJob';
import AdminJobCreate from './pages/admin/Jobs/AdminJobCreate';
import AdminDeleteJob from './pages/admin/Jobs/AdminDeleteJob';

/* Admin Job Category Opeartions*/
import AdminCategary from './pages/admin/JobCategary/AdminCategary';

const UserDashBoardHOC = Layout(UserDashBoard);
const AdminDashboardHOC = Layout(AdminDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoHOC = Layout(UserInfoDashboard);
const AdminJobsHOC = Layout(AdminJobs);
const AdminUsersHOC = Layout(AdminUsers);
const AdminCategaryHOC = Layout(AdminCategary);
const AdminEditJobHOC = Layout(AdminEditJob);
const AdminJobCreateHOC = Layout(AdminJobCreate);
const AdminDeleteJobHOC = Layout(AdminDeleteJob); 
const AdminEditUserHOC = Layout(AdminEditUser);
const AdminDeleteUserHOC = Layout(AdminDeleteUser);
const AdminCreateUserHOC = Layout(AdminCreateuser);

const App = () => {
  return (
    <>
      {/*  */}
      <ToastContainer />
      <Router>
        <NavBar className='w-screen h-auto' />

        <Routes>

          <Route exact path='/resources' element={<Resources />}></Route>
          <Route exact path='/' element={<Home />} />
          <Route exact path='*' element={<NotFound />} />{/* Any Page that is not available will get redirected to not found using (*) */}
          <Route exact path='/findjob' element={<FindJob />} />
          <Route path='/search/location/:location' element={<FindJob />} />
          <Route path='/search/:keyword' element={<FindJob />} />
          <Route path='/job/:id' element={<SingleJob />} />
          <Route exact path='/policy' element={<Policy />} />
          <Route exact path='/demo' element={<Demo />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/user/dashboard' element={<UserRoute><UserDashBoardHOC /></UserRoute>} />
          <Route exact path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
          <Route exact path='/user/info' element={<UserRoute><UserInfoHOC /></UserRoute>} />
          <Route exact path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
          <Route exact path='/admin/users' element={<AdminRoute><AdminUsersHOC /></AdminRoute>} />
          <Route exact path='/admin/jobs' element={<AdminRoute><AdminJobsHOC /></AdminRoute>} />
          <Route exact path='/admin/category' element={<AdminRoute><AdminCategaryHOC /></AdminRoute>} />
          <Route exact path='/admin/job/create' element={<AdminRoute><AdminJobCreateHOC/></AdminRoute>} />
          <Route exact path='/admin/delete/job/:id' element={<AdminRoute><AdminDeleteJobHOC/></AdminRoute>} />
          <Route exact path='/admin/delete/user/:id' element={<AdminRoute><AdminDeleteUserHOC/></AdminRoute>} />
          <Route exact path='/admin/edit/job/:id' element={<AdminRoute><AdminEditJobHOC/></AdminRoute>} />
          <Route exact path='/admin/edit/user/:id' element={<AdminRoute><AdminEditUserHOC/></AdminRoute>} />
          <Route exact path='/admin/create/user' element={<AdminRoute><AdminCreateUserHOC/></AdminRoute>} />
        </Routes>
        <Footer />
      </Router>

    </>
  );


}

export default App