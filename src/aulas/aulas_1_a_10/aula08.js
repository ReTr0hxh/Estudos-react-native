import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

export default function Aula08() {
    const [nome, setNome] = useState('')
    
    function pegaNome(texto) {
        if (texto.length > 0) {
            setNome('Bem vindo ' + texto)
        } else {
            setNome('')
        }
    }


    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                onChangeText={ (text) => pegaNome(text)}
            />

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