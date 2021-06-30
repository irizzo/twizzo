/* Recursos */
import React from 'react';
import { View } from 'react-native';

import Card from '../components/Card';

export default function Homescreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card />
    </View>
  );
}
