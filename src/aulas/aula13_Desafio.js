import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Aula13() {
  const [numero, setNumero] = useState(0);

  function adicionar() {
    // Só adiciona se for menor que 10
    if (numero < 10) {
      setNumero(numero + 1);
    }
  }

  function remover() {
    // Só remove se for maior que 0
    if (numero > 0) {
      setNumero(numero - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pessoas no Restaurante</Text>

      <View style={styles.areaContador}>
        {/* Renderizamos a variável de estado 'numero' */}
        <Text style={styles.contador}>{numero}</Text>
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity
          // Aplicamos o estilo dinâmico direto no botão
          style={[styles.botao, numero >= 10 && styles.botaoDesabilitado]}
          onPress={adicionar}
          // A lógica do disabled fica super simples: desabilita se numero for 10
          disabled={numero >= 10}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, numero <= 0 && styles.botaoDesabilitado]}
          onPress={remover}
          // Desabilita se numero for 0
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
    width: 50, // Aumentei um pouquinho para o número não ficar apertado
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
    height: 40, // Aumentei um pouco a altura para ficar mais clicável
    margin: 17,
    borderRadius: 9,
  },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#fff', // Adicionei cor branca para ler melhor no fundo roxo
  },
  botaoDesabilitado: {
    backgroundColor: '#A9A9A9', // Agora o fundo do botão fica cinza
    opacity: 0.6,
  },
});