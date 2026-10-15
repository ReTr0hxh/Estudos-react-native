import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


export default function CreateNote() {

  return (
    <View style={styles.container}>
      <View style={styles.bottomSide}>
        <View style={styles.background}>
          <Image source={require('../img/foto1.png')} style={[styles.imagem, {width: 70, height: 70}]} />
          <Text style={{fontSize: 15}}>As notas adicionadas são exibidas aqui</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    backgroundColor: "#131212"
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});