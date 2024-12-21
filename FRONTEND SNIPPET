import React, { useState } from "react";

const TokenInfo = () => {
    const [data, setData] = useState(null);

    const fetchTokenInfo = async () => {
        const response = await fetch("/api/token-info");
        const info = await response.json();
        setData(info);
    };

    return (
        <div>
            <h1>NeuralNodes Token Info</h1>
            <button onClick={fetchTokenInfo}>Get Info</button>
            {data && (
                <div>
                    <p>Name: {data.name}</p>
                    <p>Symbol: {data.symbol}</p>
                    <p>Total Supply: {data.totalSupply}</p>
                    <p>Network: {data.network}</p>
                </div>
            )}
        </div>
    );
};

export default TokenInfo;
