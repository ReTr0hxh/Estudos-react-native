import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';

function Pessoas(props) {
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> {props.data.id} </Text>
        <Text style={styles.textoPessoa}> {props.data.nome} </Text>

        
      </View>
    )
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#951616',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#fff',
  }
});

export default Pessoas;