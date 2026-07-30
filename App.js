import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula03 from './src/aulas/aula03';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula03 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});