import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Home: React.FC = () => {
  const { isAuth, firstName, photoUrl } = useAuth()

  return (
    <div className="min-h-screen bg-bg_color flex flex-col items-center justify-center">
      {photoUrl && (
        <div className="mb-8">
          <img src={photoUrl} alt={`${firstName}'s photo`} className="w-32 h-32 rounded-full object-cover border-4 border-accent_text_color" />
        </div>
      )}
      <div className="bg-section_bg_color p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">{firstName}, welcome to spokystan 😌</h1>
        <p className="text-subtitle_text_color mb-8 text-center">everythin' is spoky here</p>
        
        <button 
          onClick={() => alert(`deposit 10 TON to become a spokystan citizen ${isAuth} ${photoUrl}`)}
          className="w-full py-2 px-4 bg-button_color text-button_text_color rounded hover:opacity-90 transition duration-300"
        >
          become a spokystan citizen 🤙🏻
        </button>
      </div>
    </div>
  );
};

export default Home;
