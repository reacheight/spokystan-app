import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTonWallet } from '@tonconnect/ui-react';

const Home: React.FC = () => {
  const { firstName } = useAuth()
  const wallet = useTonWallet()

  return (
    <div className="p-8 rounded-lg max-w-md w-full">
      <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">{firstName}, welcome to spokystan 😌</h1>
      <p className="text-subtitle_text_color mb-8 text-center">everythin' is spoky here</p>
      
      <p className="text-center text-accent_text_color">
        {wallet 
          ? "🤙🏻 you are a spokystan citizen now"
          : "👝 connect your wallet to become a spokystan citizen"}
      </p>
    </div>
  );
};

export default Home;
