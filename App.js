import React from 'react';
import { View, StyleSheet } from 'react-native';

import MiniProjeto from './src/aulas/miniProjeto';

export default function App() {
  return (
    <View style={styles.container}>
      <MiniProjeto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});