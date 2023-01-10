import './App.css';
import { BrowserRouter, HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import LoginPage from './pages/Login';
import { useState } from 'react';

function App() {
  const [signedin, setsignedin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {signedin && <Navigate to="/Main" replace={true} />}
        <Routes>
          <Route path="/" element={<Navigate to='Login'/>}/>
          <Route path='Login' element={<LoginPage setsignedin={setsignedin} />} />
          <Route path='Main' element={<Main />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
