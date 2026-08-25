import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Aula07(){

  return(
    <View style={{
        flex:1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>

        <View style={{ height: 65, width: 50, backgroundColor: '#fffb02'}}></View>

        <View style={{height: 65, width: 50, backgroundColor: '#0ae247'}}></View>

        <View style={{ height: 65, width: 50, backgroundColor: '#bc1bca'}}></View>
        
    </View>
  );
}


export default Aula05;