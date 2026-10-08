import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';


export default function FrontPage() {

  return (
    <View style={styles.container}>
      <View style={styles.topSide}>

         <TouchableOpacity style={styles.botaoTopSide}>
          <Image source={require('../img/menu.png')} style={[styles.imagem, {height: 37}]} />
        </TouchableOpacity>    

        <Image source={require('../img/foto2.png')} style={[styles.imagem, {marginLeft: 20, marginRight: 8, height: 37, marginBottom: '15'}]} />
        <Text style={styles.keep}>Keep</Text>

        <View style={styles.viewInput}>
          <TextInput style={styles.textInput} placeholder='Pesquisar' placeholderTextColor={"#fff"}/>
        </View>


      </View>
        
      <View style={styles.leftSide}>
        
        <TouchableOpacity style={styles.botaoLeftSide}>
          <Image source={require('../img/foto1.png')} style={styles.imagem} />
          <Text style={styles.textLeftSide}>Notas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Image source={require('../img/notificacao.png')} style={styles.imagem} />
          <Text style={styles.textLeftSide}>Lembretes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Image source={require('../img/pencil.png')} style={styles.imagem} />
          <Text style={styles.textLeftSide}>Editar marcadores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Image source={require('../img/caixadeentrada.png')} style={styles.imagem} />
          <Text style={styles.textLeftSide}>Arquivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Image source={require('../img/lixo.png')} style={styles.imagem} />
          <Text style={styles.textLeftSide}>Lixeira</Text>
        </TouchableOpacity>
        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  topSide: {
    width: 'auto',
    height: 70,
    backgroundColor: '#131212',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: 'row'
  },
  botaoTopSide: {
    backgroundColor: "#131212",
    width: 40,
    height: 40,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    flexDirection: 'row',
    paddingLeft: 15
  },
  keep: {
    color: "#fff",
    fontSize: 20,
    marginRight: 20,
  },
  viewInput: {
    backgroundColor: "#1b1919",
    width: 200,
    borderRadius: 8
  },
  textInput: {
    color: '#fff',
    marginLeft: 15,
  },
  leftSide: {
    marginTop: 7
  },
  textLeftSide: {
    fontSize: 14,
    color: "#fff",
    
  },
  botaoLeftSide: {
    backgroundColor: "#131212",
    width: 180,
    height: 40,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    flexDirection: 'row',
    paddingLeft: 15
  },
  imagem: {
    width: 25,
    height: 25,
    marginRight: 10
  }
});