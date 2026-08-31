import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula19 from './src/aulas/aulas_11_a_21/aula_19/aula19';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula19 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});