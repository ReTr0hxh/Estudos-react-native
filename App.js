import React from 'react';
import { View, StyleSheet } from 'react-native';

import aula12 from './src/aulas/aula12_Desafio';
import Aula12 from './src/aulas/aula12_Desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula12 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});