import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">Profile</h1>
        <p className="text-blue-100">Manage your account</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* User Info */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic text-center">
          <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-5xl">person</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h2>
          <p className="text-gray-600 dark:text-gray-400">john.doe@company.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Warehouse Manager</p>
        </div>

        {/* Settings */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic space-y-1">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">edit</span>
              <span className="text-gray-900 dark:text-white">Edit Profile</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
              <span className="text-gray-900 dark:text-white">Notifications</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="text-gray-900 dark:text-white">Dark Mode</span>
            </div>
            <div className={`w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-primary' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${darkMode ? 'ml-6' : 'ml-1'}`}></div>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">language</span>
              <span className="text-gray-900 dark:text-white">Language</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400">English</span>
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>

        {/* Version */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500">
          Version 1.0.0
        </p>
      </div>
    </div>
  );
};

export default Profile;
