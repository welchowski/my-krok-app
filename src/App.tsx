import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/landing/HomePage';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import Module from './pages/dashboard/Module';
import Static from './pages/dashboard/Static';
import Card from './pages/dashboard//Card';
import FlashCardRun from './components/FlashCardRun';
import Tests from './pages/dashboard/Tests';
import TestRun from './components/TestRun';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* ← саме тут підключається */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Static />} /> {/* дефолтний контент */}
          <Route path="static" element={<Static />} />
          <Route path="profile" element={<Profile />} />
          <Route path="flash" element={<Card />} />
          <Route path="flash/run" element={<FlashCardRun />} />          
          <Route path="tests" element={<Tests />} />          
          <Route path="tests/run" element={<TestRun />} />
          <Route path="module" element={<Module />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;