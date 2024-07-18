import React from 'react';

function WalletCard({ wallet, onClick }) {
  return (
    <div 
      className="p-6 bg-white rounded-xl flex items-center space-x-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={() => onClick(wallet)}
    >
      <img 
        src={wallet.icon} 
        alt={wallet.name} 
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{wallet.name}</h3>
        <p className="text-sm text-gray-500 custom">{wallet.url}</p>
      </div>
    </div>
  );
}

export default WalletCard;