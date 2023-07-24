import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Resources from './pages/Resources'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FindJob from './pages/FindJob'
import Policy from './components/Policy'
import Demo from './components/Demo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './pages/Login';
import UserDashBoard from './pages/user/UserDashBoard';
import UserRoute from './components/UserRoutes';

// HOC
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobHistory';
import UserInfo from './pages/user/UserInfo';

const UserDashBoardHOC = Layout(UserDashBoard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoHOC = Layout(UserInfo);

const App = () => {
  return (
    <>
        {/*  */} 
        <ToastContainer/>
        <Router>   
        <NavBar className='w-screen h-auto' />
          <Routes>
            <Route exact path='/resources' element={<Resources/>}></Route>
            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<NotFound />} />{/* Any Page that is not available will get redirected to not found using (*) */}
            <Route exact path='/findjob' element={<FindJob />} />
            <Route path='/search/location/:location' element={<FindJob />} />
            <Route path='/search/:keyword' element={<FindJob />} />
            <Route exact path='/policy' element={<Policy />} />
            <Route exact path='/demo' element={<Demo />} />
            <Route exact path='/login' element={<LogIn />} />
            <Route exact path='/user/dashboard' element={<UserRoute><UserDashBoardHOC /></UserRoute>} />
            <Route exact path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
            <Route exact path='/user/info' element={<UserRoute><UserInfoHOC /></UserRoute>} />
          </Routes>
        <Footer/>
        </Router>
      
    </>
  );


}

export default App