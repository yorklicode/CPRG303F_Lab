import React from 'react';
import { View } from 'react-native';
import CatFacts from '../components/CatFacts';

const CatFactsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CatFacts />
    </View>
  );
};

export default CatFactsScreen;
