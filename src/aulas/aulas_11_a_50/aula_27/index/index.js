import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function App(props) {

  return (
    <View style={styles.container}>
      <Text>Oie</Text>
      <Button tittle="Fechar" onPress={ props.fechar }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});