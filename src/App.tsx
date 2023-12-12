import './App.scss';

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './modules/shared/components/Header';
import { Footer } from './modules/shared/components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      ----------
      <main>
        <Outlet />
      </main>
      ----------
      <Footer />
    </>
  );
};
