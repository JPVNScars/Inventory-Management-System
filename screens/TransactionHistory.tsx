import React, { useState } from 'react';

const TransactionHistory: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'in' | 'out'>('all');

  const mockTransactions = [
    { id: '1', partName: 'Bearing 6205', sku: 'BRG-6205', type: 'in' as const, quantity: 50, time: '2 hours ago', user: 'John Doe' },
    { id: '2', partName: 'Motor 3HP', sku: 'MTR-3HP', type: 'out' as const, quantity: 5, time: '5 hours ago', user: 'Jane Smith' },
    { id: '3', partName: 'Belt V-Type', sku: 'BLT-V01', type: 'in' as const, quantity: 20, time: '1 day ago', user: 'John Doe' },
    { id: '4', partName: 'Seal Kit A', sku: 'SL-KIT-A', type: 'out' as const, quantity: 10, time: '2 days ago', user: 'Mike Johnson' },
  ];

  const filteredTransactions = filter === 'all' 
    ? mockTransactions 
    : mockTransactions.filter(t => t.type === filter);

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-1">Transaction History</h1>
        <p className="text-blue-100">View all stock movements</p>
      </div>

      {/* Filters */}
      <div className="p-6">
        <div className="flex gap-2 bg-white dark:bg-surface-dark rounded-xl p-2 shadow-neumorphic">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('in')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              filter === 'in'
                ? 'bg-green-500 text-white'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Stock In
          </button>
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
