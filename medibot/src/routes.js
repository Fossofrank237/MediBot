import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ChatbotPage from './pages/ChatbotPage';
import HistoryPage from './pages/HistoryPage';
import AdvicePage from './pages/AdvicePage';
import ProfilePage from './pages/ProfilePage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/historique" element={<HistoryPage />} />
        <Route path="/conseils" element={<AdvicePage />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;