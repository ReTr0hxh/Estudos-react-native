import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function Aula12() {
    
    const [numero, setNumero] = useState(0)
    const [nome, setNome] = useState('Start')
    const [lap, setLap] = useState(null)
    const [nomeLap, setNomeLap] = useState('Lap')

    function Inciar() {
        if (timer !== null) {
            //Parando o timer
            clearInterval(timer);
            timer = null;

            if (nome == 'Stop') {
                setNome('Resume')
            }

            setNomeLap('Reset')


        } else {
            //Iniciando o timer
            timer = setInterval(()=>{
                ss++;

                if (ss == 60) {
                    ss = 0;
                    mm++;
                }

                if (mm == 60) {
                    mm = 0;
                    hh++;
                }

                let fomart = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

                setNumero(fomart)

                setNome('Stop')

            }, 1000)
        }
    }

    function Resetar() {
       if (nomeLap == 'Lap') {

        setLap(numero)


       }else{
            if (timer !== null) {
                //Resentando o timer
                clearInterval(timer);
                timer = null;
            }

            setNumero(0);

            hh = 0;
            ss = 0;
            mm = 0;

            setNome('Start');

            setNomeLap('Lap')

            setLap(null)
       }
    }

    return(
        <View style={estilos.container}>

            <Image
                source={require('./aula12.png')}
            />

            <Text style={estilos.timer}>{numero}</Text>


             <View style={estilos.btnArea}>


                <TouchableOpacity style={estilos.btn} onPress={() => Inciar()}>
                    <Text style={estilos.btnTexto}>{nome}</Text>
                </TouchableOpacity>
                


                <TouchableOpacity style={estilos.btn} onPress={()=> Resetar()}>
                    <Text style={  estilos.btnTexto}>{nomeLap}</Text>
                </TouchableOpacity>


             </View>




             <View style={estilos.areaLap}>
                <Text style={estilos.lap}>{lap}</Text>
             </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00aeef'
    },
    timer:{
        marginTop: -160,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnArea:{
       marginTop: 130,
       flexDirection: 'row',
        height: 30
    },
    btn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 30,
        margin: 17,
        borderRadius: 9,
    },
    btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ae'
    },
    areaLap:{
        marginTop: 40
    },
    lap:{
        fontSize: 23,
        color: '#fff',
        fontStyle: 'italic'
    }
})