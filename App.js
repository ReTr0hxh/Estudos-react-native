import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula15 from './src/aulas/aula15_Desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula15 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});