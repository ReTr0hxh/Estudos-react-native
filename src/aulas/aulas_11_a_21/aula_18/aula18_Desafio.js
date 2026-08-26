import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text  } from "react-native";

import Dados from './index';

export default function aula18_Desafio(params) {

    const [usuario, setUsuario] = useState([
        {id: '1', nome: 'Renan Santos', cargo: 'Presidente'}
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.textoInicial}>Seja bem vindo!</Text>

            <FlatList
                data={usuario}
                keyExtractor={(item)=>item.id}
                renderItem={(item)=> <Dados data={item}/>}
            />
        </View>
    );
}   


const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: "center",
    },
    textoInicial:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
})
