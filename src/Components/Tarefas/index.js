import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useState } from 'react';

export default function Tarefas({data,onDelete,onInfo, onAlternar}) {

  const [concluida, setConcluida] = useState(data.concluida);

  const alternarTarefa = () => { 
    setConcluida(!concluida);
    onAlternar(data.id);
  }
  

  

 return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.square} onPress={alternarTarefa} >
        <Feather 
        name = { concluida ? "check-square": "square"} 
        size={24} 
        color={concluida ? "00A00" : "#000"}
        />
      </TouchableOpacity>
    
      <Text style={[styles.label, concluida && styles.labelConcluida]}>
        {data.label}
      </Text>

    
    <View style={styles.elementos}>
      
      <TouchableOpacity style={styles.info} onPress={() => onInfo(data)}>
        <Feather name="info" size={24} color={"#000"} />
      </TouchableOpacity>
      
      <TouchableOpacity styles={styles.lixo} onPress={() => onDelete(data.id)}>
        <Feather name = "trash" size ={24} color={"#000"}/>
      </TouchableOpacity>
    
    </View>
    </View>
 )}

const styles = StyleSheet.create({
    container:{
      marginBottom:0,
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
    elementos:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    info: {
      marginHorizontal:15
    },
    lixo: {
      
    },
})