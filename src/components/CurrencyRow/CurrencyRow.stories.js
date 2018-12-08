import React from 'react';
import { storiesOf } from '@storybook/react';
import CurrencyRow from './index';

export const data = {
  symbol: '$',
  currency: 'USD',
  currentRate: 1.001,
  previousRate: 1.0
};

storiesOf('CurrencyRow', module).add('default', () => (
  <CurrencyRow data={data} sample="1000" />
));
