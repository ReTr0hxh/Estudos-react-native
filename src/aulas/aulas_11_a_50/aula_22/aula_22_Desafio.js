import React, { use, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const OPCAO_SEXO = [
    {key: 1, label: "Homem"},
    {key: 2, label: "Mulher"}
];

export default function App() {

    // Informações pessoais
    const [nome, setNome] = useState(""); 
    const [idade, setIdade] = useState(""); 

    const [credito, setCredito] = useState(250)

    const [status, setStatus] = useState(false); 
    const [sexoSelecionado, setSexoSelecionado] = useState(1);

    const [criou, setCriou] = useState(false);

  return (
    <View style={styles.container}>
        
        <View style={{alignItems: 'center'}}><Text style={styles.textMain}>BANCO</Text></View>

        <View style={{alignItems: 'center'}}><Text style={styles.textMain}>Informe seus dados para criar a conta</Text></View>

        <TextInput 
            placeholder='Digite seu nome...'
            value={nome}
            onChangeText={setNome}
            autoCapitalize='words'
        />
        <TextInput 
            placeholder='Digite sua idade...'
            value={idade}
            onChangeText={setIdade}
            keyboardType='numeric' 
        />

        <Picker
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue) => setSexoSelecionado(itemValue)}
        >
            {OPCAO_SEXO.map((item) => (
                <Picker.Item
                    key={item.key}
                    value={item.key}
                    label={item.label} 
                />
            ))}
        </Picker>

        <View>

            <Text> Selecione a quantidade do limite: {credito.toFixed(0)} R$</Text>  

            <Slider
            minimumValue={250}
            maximumValue={2000}
            valor={credito}
            onValueChange={(v)=>setCredito(v)}
            />           
        </View>

        
        <View style={{alignItems: 'baseline'}}>
            <Switch 
            value={status}
            onValueChange={setStatus}
            />
            {status === true  ? <Text style={{fontWeight: 'bold'}}>Estudante</Text> : <Text>Não estudante</Text>}
        </View>


        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                onPress={()=> setCriou(true)}
            >
                <Text style={styles.textMain}>Abrir Conta</Text>
            </TouchableOpacity>

            {criou && (
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={styles.textMain}>Resumo da Conta:</Text>
                <Text>Nome: {nome}</Text>
                <Text>Idade: {idade}</Text> 
                </View>
            )}

        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  textMain:{
    fontWeight: 'bold',
    fontSize: 15,
  }
});