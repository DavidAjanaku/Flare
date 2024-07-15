import React from 'react';
import WalletCard from './WalletCard';

function WalletGrid({ wallets, onCardClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {wallets.map(wallet => (
        <WalletCard key={wallet.id} wallet={wallet} onClick={onCardClick} />
      ))}
    </div>
  );
}

export default WalletGrid;
