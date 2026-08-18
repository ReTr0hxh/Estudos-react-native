import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula14 from './src/aulas/aula14';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula14 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});