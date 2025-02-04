import React, { useState, useEffect } from 'react';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch crypto data on component mount
  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.coinlore.net/api/tickers/');
        const { data } = await response.json();
        setCryptoData(data); // Directly set the data
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCryptoData();
  }, []);

  if (loading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="w-full h-screen bg-[#1a065d]">
      <div className="w-full h-9 bg-[#1A065D] text-white flex justify-between items-center px-10 text-sm uppercase">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24h Change</p>
        <p>Market Cap</p>
      </div>

      {/* Crypto Data List */}
      <div className="overflow-y-auto h-[calc(100vh-36px)]">
        {cryptoData.map((crypto, index) => (
          <div
            key={crypto.id}
            className="w-full h-12 bg-[#2c0c6d] flex justify-between items-center text-white px-10 border-b border-[#3b1361]"
          >
            <p>{index + 1}</p>
            <p>{crypto.name}</p>
            <p>${crypto.price_usd}</p>
            <p className={crypto.percent_change_24h < 0 ? 'text-red-500' : 'text-green-500'}>
              {crypto.percent_change_24h}%
            </p>
            <p>${crypto.market_cap_usd}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto; 