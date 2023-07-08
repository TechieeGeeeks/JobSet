import './App.css';
import {Routes, BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*'element={<NotFound/>}/>{/* Any Page that is not available will get redirected to not found using (*) */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
