import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Home: React.FC = () => {
  const { username } = useAuth()

  return (
    <div className="min-h-screen bg-bg_color flex items-center justify-center">
      <div className="bg-section_bg_color p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">{username}, welcome to spokystan</h1>
        <p className="text-subtitle_text_color mb-8 text-center">everythin is spoky here</p>
        
        <button 
          onClick={() => alert('deposit 10 TON to become spokystan citizen')}
          className="w-full py-2 px-4 bg-button_color text-button_text_color rounded hover:opacity-90 transition duration-300"
        >
          become spokystan citizen 🤙🏻
        </button>
      </div>
    </div>
  );
};

export default Home;
