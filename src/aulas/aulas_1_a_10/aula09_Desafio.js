import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native'



export default function Aula09() {
    const [mensagem, setMensagem] = useState('Sistema Bloqueado')


        function AtualizadorCodigo(code) {
        
            if (code.length > 0) {
                setMensagem("Acesso Concedido: " + code)
            }else {
                setMensagem("Sistema Bloqueado")
            }

        }

    return(
        <View style={styles.flex}>
            <TextInput
                placeholder='Digite seu codigo'
                onChangeText={(codigo) => AtualizadorCodigo(codigo)}
            />

            <Text> {mensagem} </Text>

            <View style={styles.container}>
                
                <View style={{width: 50, height: 50, backgroundColor: '#5b5b5b'}}></View>

                <View style={{width: 50, height: 50, backgroundColor: '#d91a1a'}}></View>

                <View style={{width: 50, height: 50, backgroundColor: '#643bf7'}}></View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        flex: {
            flex: 1
        }
    });
