import React, { useState } from 'react';
import { View,  Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function aula11() {
    
    const [img, setImg] = useState(require('./aula11_Desafio.png'));

    function quebrarBiscoito() {
        setImg(require('./aula11_Desafio2.png'))
    }
    function reinciarBiscoito() {
        setImg(require('./aula11_Desafio.png'))
    }

    return(
        <View style={styles.container}>
            <Image
                source={img}
                style={styles.img}
            />

            <Text style={styles.Mensagem}> "Mensagem" </Text>

            <TouchableOpacity style={styles.Botao} onPress={()=> quebrarBiscoito()}>
                <View style={styles.area}>
                    <Text style={styles.texto}>
                        Quebrar Biscoito
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.Botao, {marginTop: 5}]} onPress={()=> reinciarBiscoito()}>
                <View style={styles.area}>
                    <Text style={styles.texto}>
                        Reinciar Biscoito
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 230,
        height: 230
    },
    Mensagem:{
        fontSize: 20,
        color: '#b8188d',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    Botao:{
        width: 230,
        height: 50,
        borderColor: '#000000f',
        borderWidth: 2,
        borderRadius: 25,
    },
    area:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c318c9'
    }
})
