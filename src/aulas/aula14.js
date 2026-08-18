import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


export default function Aula14() {
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.a1}></View>
        <View style={styles.a2}></View>
        <View style={styles.a3}></View>
        <View style={styles.a4}></View>

      </ScrollView>
    
      <ScrollView horizontal={true}showsHorizontalScrollIndicator={false}>

        <View style={styles.a1}></View>
        <View style={styles.a2}></View>
        <View style={styles.a3}></View>
        <View style={styles.a4}></View>

      </ScrollView>


        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  a1: {
    width: 150,
    height: 250,
    backgroundColor: 'red'
  },
  a2: {
    width: 150,
    height: 250,
    backgroundColor: 'blue'
  },
  a3: {
    width: 150,
    height: 250,
    backgroundColor: 'yellow'
  },
  a4: {
    width: 150,
    height: 250,
    backgroundColor: 'grey'
  }
});