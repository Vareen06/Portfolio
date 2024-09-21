import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Skills from './components/Skills';
import Projects from './components/Projects'
import About from './components/About';

const AppRouter = () => {
  const [mode, setMode] = React.useState(false);

  const toggleMode = () => {
    if(mode){
      setMode(false)
    }else{
      setMode(true)
    }

    // setMode((prevMode => !prevMode))
  };
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home mode={mode} />} />
        <Route path="/aboutme" element={<About mode={mode}/>} />
        <Route path="/projects" element={<Projects mode={mode} />} />
        {/* You can add more routes here for Skills, Projects, etc. */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
