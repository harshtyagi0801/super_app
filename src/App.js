import './App.css';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Register from './pages/Register';
import Genre from './pages/Genre';
import Browse from './pages/Browse';
import Movies from './pages/Movies';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Register/>}/> 
    <Route exact path='/Genre' element={<Genre/>}/>
    <Route exact path='/Browse' element={<Browse/>}/>
    <Route path="/Movies" element={<Movies />} />
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
