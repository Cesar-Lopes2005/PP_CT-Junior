import React from 'react';
import { View, StyleSheet,Text,TextInput,TouchableOpacity ,KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useState, useEffect } from 'react';


export default function BoxNovaTarefa({ onSalvarTarefa, tarefaInicial }) {
    const [tarefa, setTarefa] = useState(tarefaInicial?.label || '');
    const [detalhe, setDetalhe] = useState(tarefaInicial?.info || '');
    
    useEffect(() => {
      if (tarefaInicial) {
        setTarefa(tarefaInicial.label);
        setDetalhe(tarefaInicial.info);
      }
    }, [tarefaInicial]);

    const salvarTarefa = () => {
        if (tarefa && detalhe) {
          onSalvarTarefa({ label: tarefa, info: detalhe });
          setTarefa('');
          setDetalhe('');
        } else {
          alert('Por favor, preencha todos os campos!');
        }
      };
      

      
 
 
    return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >

    <View style={styles.square}>
        <Text style={styles.titulo}>Nova Tarefa</Text>

            <Text style={styles.label}>Digite a Tarefa:</Text>
            <TextInput
            style={styles.tarefa}
            placeholder="Escreva aqui"
            value={tarefa}
            onChangeText={setTarefa }
            />

            <Text style={styles.label}>Digite os detalhes:</Text>
            <TextInput
            style={styles.detalhe}
            placeholder="Escreva aqui"
            value={detalhe}
            onChangeText={setDetalhe}
            multiline = {true}
            numberOfLines={4}
            textAlignVertical='top'
            />
        
        <TouchableOpacity onPress={salvarTarefa}>
            <Text style={styles.salvar}> Salvar </Text>
        </TouchableOpacity>
   
    </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
    },  
    square: {
        width: 350, 
        height: 370, 
        backgroundColor: '#90D5FF', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
        marginBottom:5
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    tarefa: {
        height: 40,
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
    },
    detalhe: {
        height: 100,
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: '#fff',
    },
    salvar:{
        backgroundColor: '#fff',
        fontSize: 24,
        fontWeight:'bold',
        borderWidth: 1,
        borderRadius: 3,

    },
 
})