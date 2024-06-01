import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className='pageContent'>
        <p>The content</p>
      </div>
      </div>
    </Router>
  );
}

export default App;
