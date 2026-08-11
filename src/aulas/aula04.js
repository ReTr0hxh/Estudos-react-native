import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Aula03(){

  return(
    <View style={styles.area}>

      <Text style={[styles.titulo, styles.textoAlinhado]}>oie</Text>
      <Text style={styles.titulo}>20</Text>
      <Text style={[styles.subTitulo, styles.textoAlinhado]}>alou</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    area:{
        marginTop: 20
    },
    titulo:{
        fontSize: 20,
        color: '#fb00ff'
    },
    subTitulo:{
        color: 'rgba(0, 255, 238, 0.96)'
    },
    textoAlinhado:{
        textAlign: 'center'
    }
});










export default Aula03;