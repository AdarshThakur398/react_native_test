import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Search from './pages/Search/Search';  
import Splash from  './components/Splash/Splash'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);  
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Splash /> 
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
