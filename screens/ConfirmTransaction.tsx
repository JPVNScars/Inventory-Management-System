import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmTransaction: React.FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('1');
  const [note, setNote] = useState('');

  const handleConfirm = () => {
    // Handle transaction
    alert('Transaction confirmed!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-blue-100 hover:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold">Confirm Transaction</h1>
        <p className="text-blue-100">Stock In</p>
      </div>

      {/* Form */}
      <div className="p-6 space-y-4">
        {/* Part Info */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic">
          <h3 className="font-semibold text-gray-900 dark:text-white">Bearing 6205</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">SKU: BRG-6205</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Current: 150 units</p>
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quantity
          </label>
          <div className="input-field rounded-xl p-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
              min="1"
            />
          </div>
        </div>

        {/* Note Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Note (Optional)
          </label>
          <div className="input-field rounded-xl p-4">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-900 dark:text-white resize-none"
              rows={3}
              placeholder="Add a note..."
            />
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-light transition-colors"
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
