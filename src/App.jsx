import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import {Airdrop }from './compononts/Airdrop';
import { ShowSolBalance } from './compononts/ShowSolBalance';
import { SignMessage } from './compononts/SignMessage';
import { SendTokens } from './compononts/SendTokens';


function App() {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/W5BYxxpo6OXeMYaBblHtqLT-CgGdN47M"}>
                <WalletProvider wallets={[]} autoConnect>
                    <WalletModalProvider>
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                            <div className="flex justify-center mb-4">
                                <WalletMultiButton className="btn btn-primary"/>
                            </div>
                            <div className="flex justify-center mb-4">
                                <WalletDisconnectButton className="btn btn-secondary"/>
                            </div>
                            <div className="text-center text-xl font-semibold mb-6">
                                Solana Wallet Interaction
                            </div>
                            <Airdrop />
                            <ShowSolBalance/>
                            <SignMessage/>
                            <SendTokens/>
                        </div>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </div>

  )
}

export default App
