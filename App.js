import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula12 from './src/aulas/aula13_Desafio';

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