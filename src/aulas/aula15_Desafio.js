import React, {useState}from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


let ss = 0;
let mm = 25;

export default function aula15() {

    const [timer, setTimer] = useState(mm + ":" + 0 + ss);


    function Start() {
        
    }

    
    return(

        <View style={styles.container}>

            <Text style={[styles.textMain, {fontSize: 40, marginBottom: 100, marginTop: 10}]}>Pomodoro</Text>

            <View style={styles.pomodoro}>

                <Text style={[styles.textMain, {fontSize: 60}]}>{timer}</Text>

                <TouchableOpacity style={styles.btnPomodoro} onPress={()=>Start()}>
                    <Text style={[styles.textMain, {fontSize: 30, color: 'red'}]}>START</Text>
                </TouchableOpacity>



            </View>


            <Text style={[styles.textMain, {marginTop: 40}]}>#1</Text>

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
    btnPomodoro: {
        backgroundColor: 'white',
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    

})