import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function Aula30(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        title: 'oie',
                        headerStyle:{
                            backgroundColor: "#9c1515"
                        },
                        headerTintColor: '#fff'
                    }}
                />

                <Stack.Screen 
                    name="Sobre" 
                    component={Sobre}
                    options={{
                        headerShown: true
                    }}                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}