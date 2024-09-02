import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect, useState } from 'react';

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const [balance, setBalance] = useState(0);

    async function getBalance() { 
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            setBalance(balance / LAMPORTS_PER_SOL);
        }
    }

    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]);

    return (
        <div className="mb-4">
            <p className="text-center font-medium">SOL Balance:</p>
            <div id="balance" className="text-center text-xl font-bold">{balance} SOL</div>
        </div>
    )
}
