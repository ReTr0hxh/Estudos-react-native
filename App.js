import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula11 from './src/aulas/aula11_Desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula11 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});