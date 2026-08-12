import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button} from 'react-native';

export default function Aula06() {
    const [nome, setNome] = useState('')
    const [input, setInput] = useState('')
    
    function entrar() {
       if (input === '') {
        alert("Digite seu nome!");
        return;
       }

       setNome("Bendo vindo: " + input)

    }


    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                onChangeText={ (text) => setInput(text)}
            />

            <Button title="Entrar" onPress={ entrar }/>

            <Text style={styles.texto}> {nome} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        height: 45,
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 15
    },
    texto:{
        textAlign: 'center',
        color: '#050246'
    },
    container: {
        flex: 1
    }
})