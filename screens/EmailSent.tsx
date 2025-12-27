import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailSent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-6xl">mark_email_read</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Check Your Email
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-light transition-colors"
          >
            Back to Login
          </button>
          
          <button
            onClick={() => navigate('/forgot-password')}
            className="w-full text-primary hover:underline"
          >
            Didn't receive email? Resend
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
          Make sure to check your spam folder
        </p>
      </div>
    </div>
  );
};

export default EmailSent;
