import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('Message signed successfully!');
    };

    return (
        <div className="mb-4">
            <div className="border-2 border-gray-300 rounded-lg p-2">
                <input 
                    id="message" 
                    type="text" 
                    placeholder="Message" 
                    className="input w-full mb-2 px-4 py-2 border-none focus:outline-none"
                />
            </div>
            <button 
                onClick={onClick} 
                className="btn w-full py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors shadow-lg mt-2">
                Sign Message
            </button>
        </div>
    );
};
