import React from 'react';
import { PhonesPage } from '../PhonesPage';
import './HomePage.module.scss';

import phones from '../../static/api/phones.json';

export const HomePage: React.FC = () => {
  return <PhonesPage visiblePhones={phones} />;
};
