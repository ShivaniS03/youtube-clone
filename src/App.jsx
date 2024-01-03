import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Aside from './Aside';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      
      <Aside/>
     
     
     
    </>
  );
}
export default App;