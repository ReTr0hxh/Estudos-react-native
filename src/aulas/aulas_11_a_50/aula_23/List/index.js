import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function List(props) {
  return (
    <View>
      <View style={styles.viewPerfil}>
        <View style={styles.fotoPerfil}></View>
        <Text style={styles.nomeUsuario}> {props.data.nome}</Text>  
      </View>

      <View style={styles.fotoPublicacao}></View>

      <View style={styles.viewTaskbar}>
          {props.data.likeada == true ? 
            <TouchableOpacity>
            <Image
            source={require('../img/likeada.png')}
            style={styles.like}
            />
            </TouchableOpacity> :
            <TouchableOpacity>
            <Image
            source={require('../img/like.png')}
            style={styles.like}
            />
            </TouchableOpacity>
          }

          <TouchableOpacity>
            <Image
            source={require('../img/comment.png')}
            style={styles.like}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
            source={require('../img/send.png')}
            style={styles.like}
            />
          </TouchableOpacity>
      </View>

      <View><Text style={styles.bold}>{props.data.likers} curtidas</Text></View>
      <View><Text style={[styles.bold, {fontSize: 15}]}>{props.data.nome}</Text></View>
      <View><Text style={[styles.bold, {marginBottom: 5}]}>{props.data.descricao}</Text></View>


    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d51d1d',
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000'
  },
  fotoPublicacao: {
    height: 400,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  viewTaskbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 2
  },
  like: {
    width: 25,
    height: 25,
    padding: 8,
    marginRight: 3
  },
  bold: {
    fontWeight: 'bold',
    paddingLeft: 5,
  }
});