import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Aula24() {

    const [contador, setContador] = useState(0)

    useEffect(()=>{
        console.log('App carregado!')
    },[])

  return (
    <View style={styles.container}>
        <Button title='Aumentar' onPress={()=>setContador(contador+1)}/>
            <Text style={{fontSize: 30}}>{contador}</Text>
        <Button title='Diminuir' onPress={()=>setContador(contador-1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  }
});