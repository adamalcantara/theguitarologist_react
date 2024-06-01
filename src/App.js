import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

// Import pages
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className='pageContent'>
        <Routes>
          <Route path='/' element={<Work />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
