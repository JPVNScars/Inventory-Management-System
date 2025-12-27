import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const stats = [
    { label: 'Total Items', value: '1,234', icon: 'inventory_2', color: 'bg-blue-500' },
    { label: 'Low Stock', value: '23', icon: 'warning', color: 'bg-orange-500' },
    { label: 'Out of Stock', value: '5', icon: 'error', color: 'bg-red-500' },
    { label: 'Categories', value: '12', icon: 'category', color: 'bg-green-500' },
  ];

  const quickActions = [
    { label: 'Scan QR', icon: 'qr_code_scanner', path: '/scan', color: 'bg-primary' },
    { label: 'Add Part', icon: 'add_circle', path: '/add-part', color: 'bg-green-500' },
    { label: 'Stock Out', icon: 'remove_circle', path: '/stock-out', color: 'bg-orange-500' },
    { label: 'View All', icon: 'inventory', path: '/inventory', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">{t('dashboard.title')}</h1>
        <p className="text-blue-100">Welcome back, User!</p>
      </div>

      <div className="p-6 grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic">
            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
              <span className="material-symbols-outlined text-white">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="px-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => navigate(action.path)}
              className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic hover:shadow-neumorphic-lg transition-all"
            >
              <div className={`${action.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                <span className="material-symbols-outlined text-white text-3xl">{action.icon}</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{action.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
