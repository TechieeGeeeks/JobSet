import {Routes, BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>  
        <Router>   
          <div>
            <Routes> 
              <Route exact path='/' element={<Home />} />
              <Route exact path='*' element={<NotFound />} />{/* Any Page that is not available will get redirected to not found using (*) */}
            </Routes>
          </div>
        </Router>
    </>
  );


}

export default App