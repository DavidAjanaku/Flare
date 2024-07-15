import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


import React from 'react';
import { Link } from 'react-router-dom';

function WalletModal({ wallet, onClose, onTryAgain }) {
  if (!wallet) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-[420px] relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <img src={wallet.icon} alt={wallet.name} className="w-20 h-20 mx-auto rounded-full shadow-md" />
          <h2 className="text-2xl font-bold mt-6 text-gray-800">{wallet.name}</h2>
          <p className="text-sm text-gray-500 mt-2">{wallet.url}</p>
          <p className="mt-4 text-gray-600">This session is secured and encrypted for your protection.</p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
            <p className="text-red-600 font-medium">Oops! Something went wrong. Please try again or connect manually.</p>
          </div>
          <div className="mt-6 space-y-3">
            <button
              className="w-full py-3 text-gray-600 border border-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              onClick={onTryAgain}
            >
              Try Again
            </button>
            <Link to="/connect-wallet" className="block">
              <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Connect Manually
              </button>
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
          <FontAwesomeIcon icon={faInfoCircle} />
            This session benefits from end-to-end encryption for enhanced security. <br />
            <span className="text-red-500 font-medium mt-2 block">Your seed phrase should never be shared with anyone!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;