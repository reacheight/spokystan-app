import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg_color flex items-center justify-center">
      <div className="bg-section_bg_color p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">welcome to spokystan</h1>
        <p className="text-subtitle_text_color mb-8 text-center">everythin is spoky here</p>
        
        <button 
          onClick={() => alert('Спокистан оформлен')}
          className="w-full py-2 px-4 bg-button_color text-button_text_color rounded hover:opacity-90 transition duration-300"
        >
          become spokystan citizen 🤙🏻
        </button>
      </div>
    </div>
  );
};

export default Home;
