import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula from './src/aulas/aulas_11_a_21/aula_20/aula20';

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