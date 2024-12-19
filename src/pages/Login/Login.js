import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
 
  return (  
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.label}>Usuário:</Text>
        <TextInput 
          placeholder="Escreva Aqui" 
          style={styles.input} 
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput 
          placeholder="Escreva Aqui" 
          secureTextEntry 
          style={styles.input} 
        />
        <Button 
          title="Entrar" 
          onPress={() => navigation.navigate('TO DO LIST', {usuario} )} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: '80%',
    padding: 20,
    backgroundColor: '#90D5FF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor:'#fff'
  },
});

