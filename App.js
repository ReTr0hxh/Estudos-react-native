import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula18 from './src/aulas/aulas_11_a_21/aula_18/aula18_Desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula18 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});