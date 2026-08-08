import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula05 from './src/aulas/aula05';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula05 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});