import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg_color flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        {children}
      </main>
      {/* Здесь можно добавить Footer, если он нужен */}
    </div>
  );
};

export default Layout;