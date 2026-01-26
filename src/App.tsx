import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';   
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
import LectionRun from './components/LectionRun';
import VideoRun from './components/VideoRun'
import AudioRun from './components/AudioRun'
import Saved from './components/Saved'
import Flashexample from './components/Flashexample'
import Testhexample from './components/Testexample'
import Selectvariant from './components/Selectvariant'






function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
          <Route path="lectionRun" element={<LectionRun />} />
          <Route path="VideoRun" element={<VideoRun />} />
          <Route path="AudioRun" element={<AudioRun />} />
           <Route path="flashexample" element={<Flashexample />} />
           <Route path="Testexample" element={<Testhexample />} />
            <Route path="Selectvariant" element={<Selectvariant />} />
           <Route path="saved" element={<Saved />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;