import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useState } from 'react';

export default function Tarefas({data}) {

  const[concluida, setConcluida] = useState(false);

  const alternarTarefa = () => {
    setConcluida(!concluida);
  };

 return (
    <View style={styles.content}>
    <TouchableOpacity style={styles.square} onPress={alternarTarefa}>
      <Feather 
      name = { concluida ? "check-square": "square"} 
      size={24} 
      color={concluida ? "00A00" : "#000"}
      />
    </TouchableOpacity>
    
      <Text style={[styles.label, concluida && styles.labelConcluida]}>
        {data.label}
        </Text>

    <TouchableOpacity style={styles.info}>
      <Feather name = "info" size={24} color={"#000"}/>
    </TouchableOpacity>
    </View>
 )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginBottom:24,
      borderBottomWidth:2,
      borderBottomColor:'#808080'

    },

    content: {
      flexDirection:'row',
      justifyContent:'space-between',
      borderTop: 10,
      marginTop: 8,
      marginBottom:8,
    },

    square:{
      marginRight:10,
    },

    label: {
      fontSize: 16,
      color: '#000',
    },

    labelConcluida: {
      textDecorationLine: 'line-through',
      color: '#808080',
    },
    info: {
      marginLeft: 10,
    }
})