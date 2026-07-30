import React, { Component, useState} from 'react';
import { View, Text, Image, Button} from 'react-native';

export default function MiniProjeto() {

    const [fome, setFome] = useState(10)
    const [felicidade, setFelicidade] = useState(0)
    
    return(
        <View>
        <Logo largura={350} altura={300} nome={"gatinho"}/>

        {/*Alimentando o gato */}

        <Text>{fome}</Text>
        <Text>{felicidade}</Text>
        <Button title='Alimentar' onPress={() => setFome(fome - 1)}/>
        <Button title='Brincar' onPress={() => setFelicidade(felicidade + 1)}/>


        </View>
    );

}

function Logo(props) {
    let imagem = 'https://cdn2.thecatapi.com/images/ebv.jpg'

    return(
        <View>
            <Image source={{uri: imagem}} resizeMode="contain" style={{width: props.largura, height: props.altura}}/>
            <Text>{props.nome}</Text>
        </View>
    );

}