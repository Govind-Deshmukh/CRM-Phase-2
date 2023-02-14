import Login from './components/auth/login';
import Register from './components/auth/register';
import Home from './components/landing/index';
import Forgot from './components/auth/forgot';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
