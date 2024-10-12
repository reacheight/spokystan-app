import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useIsConnectionRestored, useTonWallet } from '@tonconnect/ui-react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_PROJECT_URL || process.env.SUPABASE_PROJECT_URL, import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY)

const Home: React.FC = () => {
  const { firstName } = useAuth()
  const wallet = useTonWallet()
  const connectionRestored = useIsConnectionRestored();

  const [citizens, setCitizens] = useState<any[] | null>(null);

  useEffect(() => {
    getCitizens();
  }, []);

  const getCitizens = async () => {
    const { data } = await supabase.from('citizens').select();
    setCitizens(data || []);
  }

  return (
    <div className="p-8 rounded-lg max-w-md w-full">
      <h1 className="text-4xl font-bold mb-6 text-center text-accent_text_color">{firstName}, welcome to spokystan 😌</h1>
      <p className="text-subtitle_text_color mb-8 text-center">everythin' is spoky here</p>

      {connectionRestored && (
        <p className="text-center text-accent_text_color">
          {wallet 
            ? "🎖 you are a honorary citizen of spokystan"
            : "👝 connect your wallet to become a citizen of spokystan"}
        </p>
      )}

      {citizens && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-accent_text_color">citizens of spokystan 🏆</h2>
          {citizens.length > 0 ? (
            <ul className="list-none pl-0">
              {citizens.map((citizen, index) => (
                <li key={index} className="text-accent_text_color">
                  {'@' + citizen.username || citizen.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-subtitle_text_color">no citizens yet, be the first</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
