import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula06 from './src/aulas/aula06';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula06 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});