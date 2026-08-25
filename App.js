import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula17 from './src/aulas/aulas_11_a_21/aula_17/aula_17';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula17 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});