import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/admin' element={<Admin />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
