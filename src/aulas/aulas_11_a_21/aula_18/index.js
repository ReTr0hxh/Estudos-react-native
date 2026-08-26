import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text  } from "react-native";

function Dados(props) {
    <View style={styles.hub}>
        <Text style={styles.textoHub}>{props.data.nome}</Text>
        <Text style={styles.textoHub}>{props.data.cargo}</Text>
    </View>
}

const styles = StyleSheet.create({
    hub: {
        backgroundColor: '#051668',
        width: 360,
        height: 200,
        justifyContent: 'center'
    },
    textoHub:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default Dados;