import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QRScan: React.FC = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    // Simulate scan
    setTimeout(() => {
      setScanning(false);
      navigate('/part/1');
    }, 2000);
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
        <h1 className="text-2xl font-bold">Scan QR Code</h1>
        <p className="text-blue-100">Point camera at QR code</p>
      </div>

      {/* Scanner Area */}
      <div className="p-6">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-neumorphic min-h-[400px] flex flex-col items-center justify-center">
          <div className="w-64 h-64 border-4 border-primary border-dashed rounded-2xl flex items-center justify-center mb-6 relative">
            {scanning ? (
              <div className="absolute inset-0 bg-primary/10 animate-pulse rounded-2xl"></div>
            ) : null}
            <span className="material-symbols-outlined text-primary text-8xl">
              qr_code_scanner
            </span>
          </div>
          
          {scanning ? (
            <p className="text-gray-600 dark:text-gray-400 mb-4">Scanning...</p>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 mb-4">Ready to scan</p>
          )}

          <button
            onClick={handleScan}
            disabled={scanning}
            className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
          >
            {scanning ? 'Scanning...' : 'Start Scan'}
          </button>
        </div>

        {/* Manual Entry */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Or enter manually</p>
          <button
            onClick={() => navigate('/inventory')}
            className="text-primary hover:underline font-semibold"
          >
            Search Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRScan;
