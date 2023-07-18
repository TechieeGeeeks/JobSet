import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import HomeCards from './components/HomeCards'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FindJob from './components/FindJob'
import Demo from './components/Demo';

const App = () => {
  return (
    <>
        {/*  */}
        <Router>
        <NavBar className='w-screen h-auto' />
          <Routes>
            <Route exact path='/resources' element={<HomeCards/>}></Route>
            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<NotFound />} />{/* Any Page that is not available will get redirected to not found using (*) */}
            <Route exact path='/findjob' element={<FindJob />} />
            <Route exact paht='/demo' element={<Demo />} />
          </Routes>
        <Footer/>
        </Router>
     
    </>
  );


}

export default App