import Main from './components/Main.js'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <>
    
    <Router>
          <Header />
           <Routes>
            <Route 
              exact path="/"
              element={<Main />}
            >
            </Route> 
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            
            
          </Routes> 

            <Footer /> 
        </Router>
       
    </>
  );
}

export default App;
