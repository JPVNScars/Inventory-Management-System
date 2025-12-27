import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-6 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-blue-100 hover:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold">Terms & Privacy Policy</h1>
        <p className="text-blue-100">Last updated: December 2024</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="text-sm">
                By accessing and using Inventory Mate, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Use License</h3>
              <p className="text-sm">
                Permission is granted to use Inventory Mate for inventory management purposes within your organization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. User Responsibilities</h3>
              <p className="text-sm">
                Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their account.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2">Data Collection</h3>
              <p className="text-sm">
                We collect information necessary to provide inventory management services, including user profiles and transaction data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data Usage</h3>
              <p className="text-sm">
                Your data is used solely for providing and improving our inventory management services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data Security</h3>
              <p className="text-sm">
                We implement industry-standard security measures to protect your data from unauthorized access.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">
                For questions about these terms or our privacy practices, please contact support@inventorymate.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolicy;
