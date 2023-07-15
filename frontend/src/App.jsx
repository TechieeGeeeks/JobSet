import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>

      
        <NavBar className='w-screen h-auto' />
        <Router>
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<NotFound />} />{/* Any Page that is not available will get redirected to not found using (*) */}
          </Routes>
        </Router>
     
    </>
  );


}

export default App