/* eslint-disable max-len */
import React from 'react';
import './HomePage.module.scss';
import phones from '../../static/api/phones.json';
import { PhoneCard } from '../shared/components/PhoneCard';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <PhoneCard phoneItem={phones[0]} />
    </>
  );
};
