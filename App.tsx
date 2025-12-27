import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
import EmailSent from './screens/EmailSent';
import TermsAndPolicy from './screens/TermsAndPolicy';
import Dashboard from './screens/Dashboard';
import InventoryList from './screens/InventoryList';
import PartDetail from './screens/PartDetail';
import QRScan from './screens/QRScan';
import ConfirmTransaction from './screens/ConfirmTransaction';
import AddPart from './screens/AddPart';
import Profile from './screens/Profile';
import StockOut from './screens/StockOut';
import TransactionHistory from './screens/TransactionHistory';
import BottomNav from './components/BottomNav';
import { LanguageProvider } from './contexts/LanguageContext';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  // Show nav on specific main screens
  const showNav = ['/dashboard', '/inventory', '/profile', '/history'].includes(location.pathname);

  return (
    <div className="relative min-h-screen w-full max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-x-hidden flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/email-sent" element={<EmailSent />} />
            <Route path="/terms" element={<TermsAndPolicy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/part/:id" element={<PartDetail />} />
            <Route path="/scan" element={<QRScan />} />
            <Route path="/confirm" element={<ConfirmTransaction />} />
            <Route path="/add-part" element={<AddPart />} />
            <Route path="/stock-out" element={<StockOut />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<TransactionHistory />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;