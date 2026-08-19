import React, {useState}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

let tempo = null;
let ss = 0;
let mm = 1;
let numeroCiclos = 1;

export default function aula15() {

    const [timer, setTimer] = useState(mm + ":0" + ss);
    const [start, setStart] = useState("START")
    const [ciclo, setCiclo] = useState(1)
    const [acabou, setAcabou] = useState(false)


    function Start() {


        if (start == "START") {
            tempo = setInterval(()=>{
                if (ss == 0) {
                    ss = 60;
                    mm--;
                }
                if (ss > 0) {
                    ss--;
                }

                let fomart = (mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss)

                setTimer(fomart)

                mm == 0 && ss == 0 ? clearInterval(tempo) : null;

                if (mm == 0 && ss == 0) {
                    numeroCiclos++;
                    setCiclo(numeroCiclos)
                    ss = 0;
                    mm = 25;
                    setTimer((mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss))
                    setStart("START");
                    
                }

            }, 1)
            setStart("PAUSE")
       }else{
            clearInterval(tempo);
            setStart("START")
       }

    }

    function Next() {
        numeroCiclos++;
        setCiclo(numeroCiclos)
        ss = 0;
        mm = 25;
        setTimer((mm < 10 ? "0" + mm : mm) + ":" + (ss == 0 || ss < 10 ? "0" + ss : ss))
        setStart("START");
        clearInterval(tempo)
    }

    
    return(

        <View style={styles.container}>

            <Text style={[styles.textMain, {fontSize: 40, marginBottom: 100, marginTop: 10}]}>Pomodoro</Text>

            <View style={styles.pomodoro}>

                <Text style={[styles.textMain, {fontSize: 60}]}>{timer}</Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.btnStart} onPress={()=>Start()}>
                        <Text style={[styles.textMain, {fontSize: 30, color: 'red'}]}>{start}</Text>
                    </TouchableOpacity>

                    {start == "PAUSE" ? 
                    <TouchableOpacity style={[{marginLeft: 10}]} onPress={()=>Next()}>
                        <Text style={[styles.textMain, styles.btnDesativado, {fontSize: 30, color: 'white'}]}>{"->"}</Text>
                    </TouchableOpacity> 
                    : null}
                </View>
                


            </View>


            <Text style={[styles.textMain, {marginTop: 40}]}>#{ciclo}</Text>

            <Text style={styles.textMain}>Time to Focus!</Text>


        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c55050'
    },
    pomodoro: {
        backgroundColor: '#b66666',
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMain: {
        color: 'white',
        fontWeight: 'bold'
    },
    btnStart: {
        backgroundColor: 'white',
        width: 120,
        height: 50,
        alignItems: 'center'
    },
    btnNext: {

    },
    btnDesativado: {
        
    }
    
    
    

})