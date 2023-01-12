import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import './base.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardSum from "./components/Dashboard/DashboardSum";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardSummary" element={<DashboardSum/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
