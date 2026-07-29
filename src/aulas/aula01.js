import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

function aula01(){

  return(
    <View>
      <Text style={{color: 'purple', fontSize: 20, margin: 20}}>Olá mundo!</Text>
      

      <Logo largura={350} altura={350} nome={'GATOS FOFINHOS'}/>

    </View>
  );
}

function Logo(props){
  let img = 'https://cdn2.thecatapi.com/images/ebv.jpg'

  return(
    <View>
      <Image source={{uri: img}} style={{ width: props.largura, height: props.altura}}/>
      <Text>{props.nome}</Text>
    </View>
  );

}
export default App;