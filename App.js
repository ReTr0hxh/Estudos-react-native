import React from 'react';
import { View, StyleSheet } from 'react-native';

import Aula04 from './src/aulas/aula04';

export default function App() {
  return (
    <View style={styles.container}>
      <Aula04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});