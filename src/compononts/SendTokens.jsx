import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Buffer } from 'buffer';

window.Buffer = Buffer;

export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return (
        <div className="mb-4">
            <div className="border-2 border-gray-300 rounded-lg p-2">
                <input 
                    id="to" 
                    type="text" 
                    placeholder="Recipient Address" 
                    className="input w-full mb-2 px-4 py-2 border-none focus:outline-none"
                />
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-2 mt-2">
                <input 
                    id="amount" 
                    type="text" 
                    placeholder="Amount (SOL)" 
                    className="input w-full mb-2 px-4 py-2 border-none focus:outline-none"
                />
            </div>
            <button 
                onClick={sendTokens} 
                className="btn w-full py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg mt-2">
                Send Tokens
            </button>
        </div>
    )
}
