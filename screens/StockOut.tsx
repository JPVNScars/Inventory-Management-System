import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StockOut: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('1');

  const mockParts = [
    { id: '1', name: 'Bearing 6205', sku: 'BRG-6205', quantity: 150 },
    { id: '2', name: 'Motor 3HP', sku: 'MTR-3HP', quantity: 25 },
    { id: '3', name: 'Belt V-Type', sku: 'BLT-V01', quantity: 8 },
  ];

  const filteredParts = mockParts.filter(part =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConfirm = () => {
    if (!selectedPart) return;
    alert('Stock out confirmed!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pb-20 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="bg-orange-500 text-white p-6 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-orange-100 hover:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold">Stock Out</h1>
        <p className="text-orange-100">Remove items from inventory</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Search */}
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

        {/* Parts List */}
        {!selectedPart ? (
          <div className="space-y-3">
            {filteredParts.map((part) => (
              <button
                key={part.id}
                onClick={() => setSelectedPart(part.id)}
                className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic hover:shadow-neumorphic-lg transition-all text-left"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{part.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">SKU: {part.sku}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{part.quantity}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Selected Part */}
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-neumorphic">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {mockParts.find(p => p.id === selectedPart)?.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current: {mockParts.find(p => p.id === selectedPart)?.quantity} units
              </p>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantity to remove
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

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPart(null)}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-4 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockOut;
