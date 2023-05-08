import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Home from './Pages/Home';
import Certificates from './Pages/Certificates';
import Education from './Pages/Education';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Education" element={<Education/>} />

        <Route path="Certificates" element={<Certificates />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );

};



export default App;
