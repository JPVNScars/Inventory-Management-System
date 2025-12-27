import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PartDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data
  const part = {
    id: id,
    name: 'Bearing 6205',
    sku: 'BRG-6205',
    quantity: 150,
    category: 'Bearings',
    location: 'Warehouse A - Shelf 12',
    minStock: 50,
    maxStock: 200,
    description: 'High-quality bearing suitable for industrial applications'
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
        <h1 className="text-2xl font-bold">{part.name}</h1>
        <p className="text-blue-100">SKU: {part.sku}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Quantity Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Stock</p>
          <p className="text-4xl font-bold text-green-500">{part.quantity}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Min: {part.minStock}</span>
            <span>•</span>
            <span>Max: {part.maxStock}</span>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-neumorphic space-y-3">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
            <p className="font-semibold text-gray-900 dark:text-white">{part.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
            <p className="font-semibold text-gray-900 dark:text-white">{part.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Description</p>
            <p className="text-gray-900 dark:text-white">{part.description}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setFilter('out')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              filter === 'out'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Stock Out
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-6 space-y-3">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-gray-400 text-6xl mb-4">inbox</span>
            <p className="text-gray-600 dark:text-gray-400">No transactions found</p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {transaction.partName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    SKU: {transaction.sku}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  transaction.type === 'in'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}>
                  {transaction.type === 'in' ? '+' : '-'}{transaction.quantity}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span>{transaction.user}</span>
                <span>{transaction.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
