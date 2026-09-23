import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function aula27() {

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