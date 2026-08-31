import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 1, nome: 'carro1', valor: 1.000},
    {key: 2, nome: 'carro2', valor: 2.000},
    {key: 3, nome: 'carro3', valor: 3.000},
    {key: 4, nome: 'carro4', valor: 4.000},
    {key: 5, nome: 'carro5', valor: 5.000},
  ])

  let carrosItem = carros.map((v, k)=> {
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })

  return (
    <View style={styles.container}>
        <Picker
          selectedValue={carroSelecionado}
          onValueChange={(itemValue, itemIndex)=> setCarroSelecionado(itemValue)}
        >
          {carrosItem}
        </Picker>

        <Text> Carro: {carros[carroSelecionado].nome}</Text>
        <Text> Carro: {carros[carroSelecionado].valor.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  }
});