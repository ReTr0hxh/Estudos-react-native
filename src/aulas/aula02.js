import React, { use, useState } from 'react';
import { View, Text, Button, Alert} from 'react-native';

function Aula02(){

  const [nome, setNome] = useState('oie');
  const [idade, setIdade] = useState(19)

  function entrar(nome, idade){
    setNome(nome)
    setIdade(idade)
  }


  return(
    <View style={{marginTop: 19}}>

      <Button title='Mudar nome' onPress={() => entrar("opa", 22)}/>
      <Text style={{fontSize: 20}}>{nome}</Text>
      <Text style={{fontSize: 20}}>{idade}</Text>
    </View>
  );
}

export default Aula02;