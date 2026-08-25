import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';

import Pessoas from './index';

export default function Aula17() {

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
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Pessoas data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});