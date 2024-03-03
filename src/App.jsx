import { useState } from 'react';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import {BrowserRouter as Router, RouterProvider, Switch  } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            
          </Switch>
        </Router>
        
        
        
</div>  
    </>
     
  )
 
}
export default App;
