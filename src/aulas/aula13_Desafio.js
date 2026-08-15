import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Aula13() {
  
  const [numero, setNumero] = useState(0);

  function adicionar() {
    
    if (numero < 10) {
      setNumero(numero + 1);
    }
  }

  function remover() {
    
    if (numero > 0) {
      setNumero(numero - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pessoas no Restaurante</Text>

      <View style={styles.areaContador}>
        <Text style={styles.contador}>{numero}</Text>
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity          
          style={[styles.botao, numero >= 10 && styles.botaoDesabilitado]}
          onPress={adicionar}
          
          disabled={numero >= 10}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, numero <= 0 && styles.botaoDesabilitado]}
          onPress={remover}          
          disabled={numero <= 0}
        >
          <Text style={styles.botaoTexto}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  contador: {
    fontSize: 30,
    color: '#fff',
  },
  areaContador: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 50,
    width: 50, 
    margin: 10,
    borderRadius: 5,
  },
  areaBotao: {
    flexDirection: 'row',
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7f3b90',
    height: 40, 
    margin: 17,
    borderRadius: 9,
  },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#fff', 
  },
  botaoDesabilitado: {
    backgroundColor: '#A9A9A9', 
    opacity: 0.6,
  },
});