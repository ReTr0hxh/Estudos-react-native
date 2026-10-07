import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FrontPage from './Front/frontPage'

export default function aula29() {

  return (
    <View style={styles.container}>
      <FrontPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "#131212"
  }
});