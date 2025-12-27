import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { Transaction } from '../types';

const TransactionHistory: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Mock data - thay bằng data thật từ API
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      partName: 'Engine Mount',
      sku: 'ENG-001',
      type: 'in',
      quantity: 50,
      time: '2024-01-15 10:30',
      user: 'Nguyễn Văn A'
    },
    {
      id: '2',
      partName: 'Brake Pad',
      sku: 'BRK-202',
      type: 'out',
      quantity: 20,
      time: '2024-01-15 09:15',
      user: 'Trần Thị B'
    },
    {
      id: '3',
      partName: 'Oil Filter',
      sku: 'OIL-303',
      type: 'in',
      quantity: 100,
      time: '2024-01-14 16:45',
      user: 'Lê Văn C'
    },
    {
      id: '4',
      partName: 'Spark Plug',
      sku: 'SPK-404',
      type: 'out',
      quantity: 35,
      time: '2024-01-14 14:20',
      user: 'Phạm Thị D'
    },
    {
      id: '5',
      partName: 'Air Filter',
      sku: 'AIR-505',
      type: 'in',
      quantity: 75,
      time: '2024-01-13 11:00',
      user: 'Hoàng Văn E'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'in' | 'out'>('all');

  const filteredTransactions = transactions.filter(t => 
    filter === 'all' ? true : t.type === filter
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-surface-dark shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-semibold dark:text-white">
            {t?.history || 'Lịch sử giao dịch'}
          </h1>
          <div className="w-10"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 px-4 pb-4">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter('in')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              filter === 'in'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            Nhập kho
          </button>
          <button
            onClick={() => setFilter('out')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              filter === 'out'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            Xuất kho
          </button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="p-4 space-y-3">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700">
              receipt_long
            </span>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Không có giao dịch nào
            </p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.type === 'in'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm mr-1">
                        {transaction.type === 'in' ? 'arrow_downward' : 'arrow_upward'}
                      </span>
                      {transaction.type === 'in' ? 'Nhập kho' : 'Xuất kho'}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {transaction.partName}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    SKU: {transaction.sku}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                      {transaction.user}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      {transaction.time}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`text-2xl font-bold ${
                      transaction.type === 'in'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {transaction.type === 'in' ? '+' : '-'}
                    {transaction.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
