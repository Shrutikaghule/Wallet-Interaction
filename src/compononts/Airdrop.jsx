import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

export function Airdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();
    
    async function sendAirDropToUser() {
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Airdrop Successful!");
    }

    return (
        <div className="mb-4">
            <div className="border-2 border-gray-300 rounded-lg p-2">
                <input 
                    id='publicKey' 
                    placeholder='Amount (SOL)' 
                    type='text' 
                    className="input w-full mb-2 px-4 py-2 border-none focus:outline-none"
                />
            </div>
            <button 
                onClick={sendAirDropToUser} 
                className="btn w-full py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg mt-2">
                Send AirDrop
            </button>
        </div>
    )
}
