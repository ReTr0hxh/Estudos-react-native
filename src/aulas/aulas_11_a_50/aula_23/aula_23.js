import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Header from './Header/index';
import List from './List/index';

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: 1,
      nome: 'Matheus Silva',
      descricao: 'aaaaaaaa',
      likeada: false,
      likers: 1
    },
    {
      id: 2,
      nome: 'Joao Silva',
      descricao: 'bbbbbbbbbbbbbb',
      likeada: true,
      likers: 10
    },
    {
      id: 3,
      nome: 'Pedro Alves',
      descricao: 'ccccccccccccccccccccccccc',
      likeada: true,
      likers: 500
    },
    {
      id: 4,
      nome: 'Roberto Lira',
      descricao: 'dd',
      likeada: true,
      likers: 200
    },
    {
      id: 5,
      nome: 'Andre Carvalho',
      descricao: 'eeeeeeeeee',
      likeada: true,
      likers: 345
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({item})=> <List data={item}/>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});