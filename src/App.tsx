import './App.scss';

import React from 'react';
import cn from 'classnames';
import { Outlet } from 'react-router-dom';

import { Header } from './modules/shared/Header';
import { Footer } from './modules/shared/Footer';
import { useAppSelector } from './store/hooks';

export const App: React.FC = () => {
  const { isDarkTheme } = useAppSelector(state => state.theme);

  return (
    <>
      <Header />
      <main
        className={cn('container', {
          container__DARK: isDarkTheme,
        })}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
