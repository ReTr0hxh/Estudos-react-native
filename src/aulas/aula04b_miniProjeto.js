import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'

function Aula04b(){
 
  return (
    <View style={{flex:1, backgroundColor: '#121212'}}>
      <View style={{height: 65, backgroundColor: '#121212'}}></View>
      
      <View style={{flex:1, backgroundColor: '#ddd'}}>
        <Foto/>
        <Text style={[estilos.titulo]}>Gatinhos</Text>
      </View>
      
      <View style={{height: 65, backgroundColor: '#121212'}}></View>
    </View>
  );
}

function Foto(){
    let img = 'https://cdn2.thecatapi.com/images/ebv.jpg'

    return(
        <View>
            <Image source={{uri: img}} style={[estilos.imagem]}/>
        </View>
    );

}


const estilos = StyleSheet.create({
    titulo:{
        marginTop: 20,
        color: '#ba21e4',
        textAlign: 'center',
        fontSize: 20
    },
    imagem:{
        width: 310,
        height: 310,
        margin: 20 
    }
})

export default Aula04b
