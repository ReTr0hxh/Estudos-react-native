import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula from './src/aulas/aulas_11_a_50/aula_22/aula_22_Desafio';

export default function App() {

  return (
    <View style={styles.container}>
      <Aula />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});