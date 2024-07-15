import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WalletGrid from './WalletGrid';
import WalletModal from './WalletModal';
import Loader from './Loader';
import ledger from './assets/images.png'
import oneInch from './assets/1inch.jpg';
import arculus from './assets/arculus.jpg';
import argent from './assets/argent.jpg';
import atWallet from './assets/at_wallet.jpg';
import atokenWallet from './assets/atoken_wallet.jpg';
import atomic from './assets/atomic.jpg';
import bifrost from './assets/bifrost.jpg';
import binance from './assets/binance.png';
import bitkeep from './assets/bitkeep.jpg';
import bitpay from './assets/bitpay.jpg';
import bridgeWallet from './assets/bridge_wallet.jpg';
import celoWallet from './assets/celo_wallet.jpg';
import coin98 from './assets/coin98.jpg';
import coinbase from './assets/coinbases.png';
import coinomi from './assets/coinomi.jpg';
import coinus from './assets/coinus.jpg';
import compound from './assets/compound.jpg';
import coolWalletS from './assets/cool_wallet_s.jpg';
import crypto from './assets/crypto.jpg';
import dharma from './assets/dharma.jpg';
import dokWallet from './assets/dok_wallet.jpg';
import easypocket from './assets/easypocket.jpg';
import ellipal from './assets/ellipal.jpg';
import encryptedInk from './assets/encrypted_ink.jpg';
import enjin from './assets/enjin.jpg';
import error from './assets/error.png';
import etoro from './assets/etoro.jpg';
import exodus from './assets/exodus.jpg';

import flareWallet from './assets/flare_wallet.jpg';
import gridplus from './assets/gridplus.jpg';
import guardaWallet from './assets/guarda_wallet.jpg';
import halodefiWallet from './assets/halodefi_wallet.jpg';
import hashkeyMe from './assets/hashkey_me.jpg';
import huobi from './assets/huobi.jpg';
import imtoken from './assets/imtoken.jpg';
import infinito from './assets/infinito.jpg';
import iotex from './assets/iotex.jpg';
import jadeWallet from './assets/jade_wallet.jpg';
import keyringPro from './assets/keyring_pro.jpg';
import kyberswap from './assets/kyberswap.jpg';
import ledgerLive from './assets/ledger_live.jpg';
import mathWallet from './assets/math_wallet.jpg';
import metamask from './assets/metamask.jpg';
import midasWallet from './assets/midas_wallet.jpg';
import mykey from './assets/mykey.jpg';
import nash from './assets/nash.jpg';

import o3Wallet from './assets/o3_wallet.jpg';
import onto from './assets/onto.jpg';
import ownbit from './assets/ownbit.jpg';
import plasmapay from './assets/plasmapay.jpg';
import polkadot from './assets/polkadot.jpg';
import polygon from './assets/polygon.jpg';
import rainbow from './assets/rainbow.jpg';
import reactSvg from './assets/react.svg';
import rwallet from './assets/rwallet.jpg';
import safepal from './assets/safepal.jpg';
import shield from './assets/shield.png';
import spatium from './assets/spatium.jpg';


import talkenWallet from './assets/talken_wallet.jpg';
import tokenPocket from './assets/token_pocket.jpg';
import tokenary from './assets/tokenary.jpg';
import tongueWallet from './assets/tongue_wallet.jpg';
import torus from './assets/torus.jpg';
import tradestation from './assets/tradestation.jpg';
import trezor from './assets/trezor.jpg';
import trustVault from './assets/trust_vault.jpg';
import trustWallet from './assets/trustwallet.png';
import trusteeWallet from './assets/trustee_wallet.jpg';
import unnamed from './assets/unnamed.png'; 
import unnamedWebp from './assets/unnamed.webp';
import unnamed1 from './assets/unnamed(1).png';
import unnamed2 from './assets/unnamed(2).png';



import unstoppableWallet from './assets/unstoppable_wallet.jpg';
import valora from './assets/valora.jpg';
import viaWallet from './assets/via_wallet.jpg';
import walle from './assets/walle.jpg';
import walletIo from './assets/wallet_io.jpg';
import walleth from './assets/walleth.jpg';
import xinfin from './assets/xinfin.jpg';
import xumm from './assets/xumm.jpg';
import zelcore from './assets/zelcore.jpg';



const wallets = [
  { id: 1, name: '1inch', url: '1inch.com', icon: oneInch },
  { id: 2, name: 'Arculus', url: 'arculus.com', icon: arculus },
  { id: 3, name: 'Argent', url: 'argent.com', icon: argent },
  { id: 4, name: 'At Wallet', url: 'atwallet.com', icon: atWallet },
  { id: 5, name: 'Atoken Wallet', url: 'atokenwallet.com', icon: atokenWallet },
  { id: 6, name: 'Atomic', url: 'atomic.com', icon: atomic },
  { id: 7, name: 'Bifrost', url: 'bifrost.com', icon: bifrost },
  { id: 8, name: 'Binance', url: 'binance.com', icon: binance },
  { id: 9, name: 'BitKeep', url: 'bitkeep.com', icon: bitkeep },
  { id: 10, name: 'BitPay', url: 'bitpay.com', icon: bitpay },
  { id: 11, name: 'Ledger', url: 'ledger.com', icon: ledger },

  { id: 13, name: 'Bridge Wallet', url: 'bridgewallet.com', icon: bridgeWallet },
  { id: 14, name: 'Celo Wallet', url: 'celowallet.com', icon: celoWallet },
  { id: 16, name: 'Coin98', url: 'coin98.com', icon: coin98 },
  { id: 17, name: 'Coinbase', url: 'coinbase.com', icon: coinbase },
  { id: 18, name: 'Coinomi', url: 'coinomi.com', icon: coinomi },
  { id: 19, name: 'Coinus', url: 'coinus.com', icon: coinus },
  { id: 20, name: 'Compound', url: 'compound.com', icon: compound },
  { id: 21, name: 'Cool Wallet S', url: 'coolwallets.com', icon: coolWalletS },
  { id: 22, name: 'Crypto', url: 'crypto.com', icon: crypto },
  { id: 23, name: 'Dharma', url: 'dharma.com', icon: dharma },
  { id: 24, name: 'Dok Wallet', url: 'dokwallet.com', icon: dokWallet },
  { id: 25, name: 'EasyPocket', url: 'easypocket.com', icon: easypocket },
  { id: 26, name: 'Ellipal', url: 'ellipal.com', icon: ellipal },
  { id: 27, name: 'Encrypted Ink', url: 'encryptedink.com', icon: encryptedInk },
  { id: 28, name: 'Enjin', url: 'enjin.com', icon: enjin },
  { id: 29, name: 'Error', url: 'error.com', icon: error },
  { id: 30, name: 'Etoro', url: 'etoro.com', icon: etoro },
  { id: 31, name: 'Exodus', url: 'exodus.com', icon: exodus },
  { id: 33, name: 'Flare Wallet', url: 'flarewallet.com', icon: flareWallet },
  { id: 34, name: 'Gridplus', url: 'gridplus.com', icon: gridplus },
  { id: 35, name: 'Guarda Wallet', url: 'guardawallet.com', icon: guardaWallet },
  { id: 36, name: 'Halodefi Wallet', url: 'halodefiwallet.com', icon: halodefiWallet },
  { id: 37, name: 'Hashkey Me', url: 'hashkeyme.com', icon: hashkeyMe },
  { id: 38, name: 'Huobi', url: 'huobi.com', icon: huobi },
  { id: 39, name: 'Imtoken', url: 'imtoken.com', icon: imtoken },
  { id: 40, name: 'Infinito', url: 'infinito.com', icon: infinito },
  { id: 41, name: 'IoTex', url: 'iotex.com', icon: iotex },
  { id: 42, name: 'Jade Wallet', url: 'jadewallet.com', icon: jadeWallet },
  { id: 44, name: 'Keyring Pro', url: 'keyringpro.com', icon: keyringPro },
  { id: 45, name: 'Kyberswap', url: 'kyberswap.com', icon: kyberswap },
  { id: 46, name: 'Ledger Live', url: 'ledgerlive.com', icon: ledgerLive },
  { id: 47, name: 'Math Wallet', url: 'mathwallet.com', icon: mathWallet },
  { id: 48, name: 'Metamask', url: 'metamask.com', icon: metamask },
  { id: 49, name: 'Midas Wallet', url: 'midaswallet.com', icon: midasWallet },
  { id: 50, name: 'MyKey', url: 'mykey.com', icon: mykey },
  { id: 51, name: 'Nash', url: 'nash.com', icon: nash },
  { id: 52, name: 'O3 Wallet', url: 'o3wallet.com', icon: o3Wallet },
  { id: 53, name: 'Onto', url: 'onto.com', icon: onto },
  { id: 54, name: 'Ownbit', url: 'ownbit.com', icon: ownbit },
  { id: 55, name: 'Plasmapay', url: 'plasmapay.com', icon: plasmapay },
  { id: 56, name: 'Polkadot', url: 'polkadot.com', icon: polkadot },
  { id: 57, name: 'Polygon', url: 'polygon.com', icon: polygon },
  { id: 58, name: 'Rainbow', url: 'rainbow.com', icon: rainbow },
  { id: 59, name: 'React SVG', url: 'reactsvg.com', icon: reactSvg },
  { id: 60, name: 'RWallet', url: 'rwallet.com', icon: rwallet },
  { id: 61, name: 'Safepal', url: 'safepal.com', icon: safepal },
  { id: 62, name: 'Shield', url: 'shield.com', icon: shield },
  { id: 63, name: 'Spatium', url: 'spatium.com', icon: spatium },
  { id: 65, name: 'Talken Wallet', url: 'talkenwallet.com', icon: talkenWallet },
  { id: 66, name: 'Token Pocket', url: 'tokenpocket.com', icon: tokenPocket },
  { id: 67, name: 'Tokenary', url: 'tokenary.com', icon: tokenary },
  { id: 68, name: 'Tongue Wallet', url: 'tonguewallet.com', icon: tongueWallet },
  { id: 69, name: 'Torus', url: 'torus.com', icon: torus },
  { id: 70, name: 'Tradestation', url: 'tradestation.com', icon: tradestation },
  { id: 71, name: 'Trezor', url: 'trezor.com', icon: trezor },
  { id: 72, name: 'Trust Vault', url: 'trustvault.com', icon: trustVault },
  { id: 73, name: 'Trust Wallet', url: 'trustwallet.com', icon: trustWallet },
  { id: 74, name: 'Trustee Wallet', url: 'trusteeWallet.com', icon: trusteeWallet },
  { id: 75, name: 'Unnamed', url: 'unnamed.com', icon: unnamed },
  { id: 76, name: 'Unnamed Webp', url: 'unnamedwebp.com', icon: unnamedWebp },
  { id: 77, name: 'Unnamed 1', url: 'unnamed1.com', icon: unnamed1 },
  { id: 78, name: 'Unnamed 2', url: 'unnamed2.com', icon: unnamed2 },
  { id: 79, name: 'Unstoppable Wallet', url: 'unstoppablewallet.com', icon: unstoppableWallet },
  { id: 80, name: 'Valora', url: 'valora.com', icon: valora },
  { id: 81, name: 'Via Wallet', url: 'viawallet.com', icon: viaWallet },
  { id: 82, name: 'Walle', url: 'walle.com', icon: walle },
  { id: 83, name: 'Wallet Io', url: 'walletio.com', icon: walletIo },
  { id: 84, name: 'Walleth', url: 'walleth.com', icon: walleth },
  { id: 85, name: 'Xinfin', url: 'xinfin.com', icon: xinfin },
  { id: 86, name: 'Xumm', url: 'xumm.com', icon: xumm },
  { id: 87, name: 'Zelcore', url: 'zelcore.com', icon: zelcore },
];



function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const filteredWallets = wallets.filter(wallet =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = wallet => {
    setSelectedWallet(wallet);
    showLoaderThenModal();
  };

  const showLoaderThenModal = () => {
    setIsLoading(true);
    setShowModal(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 5000);
  };

  const handleCloseModal = () => {
    setSelectedWallet(null);
    setShowModal(false);
  };

  const handleTryAgain = () => {
    showLoaderThenModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl  mb-6 text-center">Select a Wallet</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <WalletGrid wallets={filteredWallets} onCardClick={handleCardClick} />
      {isLoading && <Loader />}
      {showModal && (
        <WalletModal 
          wallet={selectedWallet} 
          onClose={handleCloseModal} 
          onTryAgain={handleTryAgain}
        />
      )}
    </div>
  );
}

export default Home;