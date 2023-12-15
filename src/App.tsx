import './App.scss';

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './modules/shared/Header';
import { Footer } from './modules/shared/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
