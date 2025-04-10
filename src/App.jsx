import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';

// import pages
import HomePage from './components/HomePage';
import NotificationsPage from './components/NotificationsPage';
import GroupPlan from './components/GroupPlan'
import SeatsManagement from './components/SeatManagment';
import UserAnalytics from './components/UserAnalytics';

import {
  FaHome,
  FaRegClipboard,
  FaRegCreditCard,
} from 'react-icons/fa';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const handleTabChange = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="max-w-[430px] mx-auto bg-gray-100 min-h-screen relative font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/group" element={<GroupPlan />} />
        <Route path="/seat" element={<SeatsManagement />} />
        <Route path="/user" element={<UserAnalytics />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <nav className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-3 px-3 border-t border-gray-200 max-w-[430px] mx-auto">
        <button
          className={`bg-transparent border-none cursor-pointer p-2 rounded-md flex flex-col items-center gap-1 text-xs ${activeTab === 'home' ? 'text-primary' : 'text-gray-500'}`}
          onClick={() => handleTabChange('home', '/')}
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </button>
        <button
          className={`bg-transparent border-none cursor-pointer p-2 rounded-md flex flex-col items-center gap-1 text-xs ${activeTab === 'qbank' ? 'text-primary' : 'text-gray-500'}`}
        >
          <FaRegClipboard className="text-xl" />
          <span>Q Bank</span>
        </button>
        <button
          className={`bg-transparent border-none cursor-pointer p-2 rounded-md flex flex-col items-center gap-1 text-xs ${activeTab === 'flashcard' ? 'text-primary' : 'text-gray-500'}`}
        >
          <FaRegCreditCard className="text-xl" />
          <span>Flashcard</span>
        </button>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;