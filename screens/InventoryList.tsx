import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const mockParts = [
    { id: '1', name: 'Bearing 6205', sku: 'BRG-6205', quantity: 150, category: 'Bearings' },
    { id: '2', name: 'Motor 3HP', sku: 'MTR-3HP', quantity: 25, category: 'Motors' },
    { id: '3', name: 'Belt V-Type', sku: 'BLT-V01', quantity: 8, category: 'Belts' },
    { id: '4', name: 'Seal Kit A', sku: 'SL-KIT-A', quantity: 45, category: 'Seals' },
  ];

  const filteredParts = mockParts.filter(part =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Inventory</h1>
        <p className="text-blue-100">Manage your parts</p>
      </div>

      <div className="p-6">
        <div className="input-field rounded-xl p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-gray-400">search</span>
          <input
            type="text"
            placeholder="Search parts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="px-6 space-y-3">
        {filteredParts.map((part) => (
          <button
            key={part.id}
            onClick={() => navigate(`/part/${part.id}`)}
            className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic hover:shadow-neumorphic-lg transition-all text-left"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{part.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">SKU: {part.sku}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{part.category}</p>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${part.quantity < 10 ? 'text-red-500' : 'text-green-500'}`}>
                  {part.quantity}
                </p>
                <p className="text-xs text-gray-500">in stock</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
