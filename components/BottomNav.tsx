import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/inventory', icon: 'inventory_2', label: 'Inventory' },
    { path: '/history', icon: 'history', label: 'History' },
    { path: '/profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              location.pathname === item.path
                ? 'text-primary'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span className="material-symbols-outlined text-2xl">
              {item.icon}
            </span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
