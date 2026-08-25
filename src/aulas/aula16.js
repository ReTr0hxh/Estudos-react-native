import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';


export default function Aula14() {

  const [feed, setFeed] = useState([
      {id: '1', nome: 'a'},
      {id: '2', nome: 'b'},
      {id: '3', nome: 'c'},
      {id: '4', nome: 'd'},
    ]);


  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={ ({item}) => <Add data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: '#951616',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#fff',
  }
});

function Add(props) {
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> {props.data.id} </Text>
        <Text style={styles.textoPessoa}> {props.data.nome} </Text>
      </View>
    )
}