import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula10 from './src/aulas/aula10';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula10 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});