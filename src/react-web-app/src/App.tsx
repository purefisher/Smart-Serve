import './App.css';
import { BrowserRouter, HashRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import LoginPage from './pages/Login';
import { useState } from 'react';
import Admin from './pages/Admin';

function App() {
  const [signedin, setsignedin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='Login'/>}/>
          <Route path='Login' element={<LoginPage setsignedin={setsignedin} signedin={signedin} />} />
          <Route path='Main' element={<Main />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
