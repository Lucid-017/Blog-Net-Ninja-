import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BlogDetail from './Components/BlogDetail';
import Create from './Components/Create';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
function App() {
  
  return (
   <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        {/* Rout paramaters with named "id" */}
        <Route path='/blog/:id' element={<BlogDetail/>}></Route>
      </Routes>
      
   </Router>
  );
}

export default App;
