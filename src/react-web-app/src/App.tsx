import './App.css';
import React from "react"
import { BrowserRouter, HashRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import LoginPage from './pages/Login';
import { useState } from 'react';
import Admin from './pages/Admin';
import Queue from './pages/Queue';

function App() {
  const [signedin, setsignedin] = useState({
    signedin:false,
    admin: false
  });
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  var ingedients = new Object();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='Login'/>}/>
          <Route path='Login' element={<LoginPage setsignedin={setsignedin} signedin={signedin} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
          <Route path='Main' element={<Main signedin={signedin} ingredients={ingedients} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
          <Route path='/Admin' element={<Admin ingredients={ingedients} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
          <Route path='/Queue' element={<Queue signedin={signedin}/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
