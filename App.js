import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula09 from './src/aulas/aula09_Desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula09 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});