/* eslint-disable max-len */
import React from 'react';
import { PhoneCard } from '../shared/components/PhoneCard';
import './HomePage.module.scss';
import phones from '../../static/api/phones.json';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <PhoneCard phoneItem={phones[0]} />
    </>
  );
};
