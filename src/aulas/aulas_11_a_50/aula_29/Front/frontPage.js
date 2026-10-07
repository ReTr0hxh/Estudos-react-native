import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';


export default function FrontPage() {

  return (
    <View style={styles.container}>
      <View style={styles.topSide}>

        <Text style={styles.keep}>Keep</Text>

        <View style={styles.viewInput}>
          <TextInput style={styles.textInput} placeholder='Pesquisar' placeholderTextColor={"#fff"}/>
        </View>


      </View>
        
      <View style={styles.leftSide}>
        <TouchableOpacity style={styles.botaoLeftSide}>
          <Text style={styles.textLeftSide}>Notas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Text style={styles.textLeftSide}>Lembretes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Text style={styles.textLeftSide}>Editar marcadores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Text style={styles.textLeftSide}>Arquivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLeftSide}>
          <Text style={styles.textLeftSide}>Lixeira</Text>
        </TouchableOpacity>
        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
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
  keep: {
    color: "#fff",
    fontSize: 25,
    margin: 10,
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
    width: 150,
    height: 40,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});