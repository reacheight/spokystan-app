import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import MotionNumber from 'motion-number';
import Typewriter from 'typewriter-effect';

const supabase = createClient(import.meta.env.VITE_SUPABASE_PROJECT_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

const Home: React.FC = () => {
  const [citizens, setCitizens] = useState<any[] | null>(null);
  const [citizenAmount, setCitizenAmount] = useState(0);

  useEffect(() => {
    getCitizens();
  }, []);

  const getCitizens = async () => {
    const { data } = await supabase.from('citizens').select();
    setCitizens(data || []);
  }

  if (citizens === null) return null;

  setInterval(() => {
    setCitizenAmount(citizens.length);
  }, 500);

  return (
    <div className="p-4 max-w-md w-full">
      <div className="flex items-start mb-8">
        <img src="/logo.png" alt="Spokystan Logo" className="w-20 h-20 mr-5" />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-accent_text_color">spokystan</h1>
          <div className="text-base text-subtitle_text_color flex">
            <Typewriter
              options={{
                cursor: '',
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}

              onInit={(typewriter: any) =>  {
                typewriter
                .typeString('the state of calmness')
                .pauseFor(2000)
                .deleteChars(8)
                .pauseFor(1000)
                .typeString('understanding')
                .pauseFor(2000)
                .deleteChars(13)
                .pauseFor(1000)
                .typeString('acceptance')
                .pauseFor(2000)
                .deleteChars(10)
                .pauseFor(1000)
                .typeString('kindness')
                .pauseFor(2000)
                .deleteChars(8)
                .pauseFor(1000)
                .typeString('peace')
                .pauseFor(2000)
                .deleteChars(5)
                .pauseFor(1000)
                .typeString('patience')
                .pauseFor(2000)
                .deleteChars(8)
                .pauseFor(1000)
                .typeString('relief')
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(1000)
                .start()
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-secondary_bg_color p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-accent_text_color">Population</h3>
          <p className="text-2xl text-text_color">
            <MotionNumber transition={{
              y: { type: 'spring', duration: 2, bounce: 0.5 },
            }} value={citizenAmount} />
          </p>
        </div>
        <div className="bg-secondary_bg_color p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-accent_text_color">Founded</h3>
          <p className="text-2xl text-text_color">
            2024
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start">
        <h2 className="font-semibold mb-4 text-subtitle_text_color">Citizens</h2>
        <ul className="list-none pl-0 w-full">
          {citizens.map((citizen, index) => (
            <li key={index} className="flex items-center mb-4">
              <img 
                src={citizen.photo_url || '/default-avatar.png'} 
                alt={`citizen's photo`}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div className="flex flex-col items-start">
                <span className="text-text_color font-medium">
                  {citizen.username ? `@${citizen.username}` : citizen.name}
                </span>
                {citizen.title && (
                  <span className="text-subtitle_text_color font-medium text-sm">
                    {citizen.title}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
