import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  name: string;
  color: string;
};

export const TabBarIcon: React.FC<Props> = ({ name, color }) => (
  <FontAwesome
    name={name}
    style={{
      fontSize: 25,
      color: color || 'white'
    }}
  />
);
