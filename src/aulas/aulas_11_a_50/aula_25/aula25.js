import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Aula25() {

  const [input, setInput] = useState(0)
  const [nome, setNome] = useState("")

  useEffect(()=>{
    async function loadData() {
      await AsyncStorage.getItem('@nome').then((value)=>{
        setNome(value)
      })
    }

    loadData();
  }, [])



  async function gravaNome() {
    await AsyncStorage.setItem('@nome', input)
    setNome(input);
  }

  return (
    <View style={styles.container}>
        <View style={styles.viewInput}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={(texto)=>setInput(texto)}
            />

            <TouchableOpacity onPress={gravaNome}>
                <Text style={styles.botao}>+</Text>
            </TouchableOpacity>
 
        </View>

        <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 320,
    height: 40, 
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 12,
    marginLeft: 4
  },
});