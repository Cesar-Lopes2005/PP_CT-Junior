import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../../Components/Header';
import Tarefas from '../../Components/Tarefas';
import BoxNovaTarefa from '../../Components/BoxNovaTarefa';
import { useState } from 'react';

export default function Home({navigation}) {
  const [list, setList, setTarefas] = useState([
    {
      id: 1,
      label: 'Fazer exercícios de Cálculo',
      date: '16/12/2024',
      info: 'Terminar o dever de cálculo do livro página 7',
    },
    {
      id: 2,
      label: 'Tirar amigo X',
      date: '17/12/2024',
      info: 'Criar o link e mandar no grupo',
    },
    {
      id: 3,
      label: 'Terminar PP',
      date: '18/12/2024',
      info: 'Finalizar o código',
    },
  ]);

  const salvarTarefa = (novaTarefa) => {
    const id = list.length + 1; // Gera um novo ID
    const novaLista = [...list, { id, ...novaTarefa }];
    setList(novaLista); // Atualiza a lista com a nova tarefa
  };

  const deletarTarefa = (id) => {
    setList((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header name="cesar_lopes" navigation={navigation}/>

      <Text style={styles.titulo}>Tarefas</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Tarefas data={item} onDelete = {deletarTarefa} />}
        ListFooterComponent={() => (
          <View style={styles.boxContainer}>
            <BoxNovaTarefa onSalvarTarefa={salvarTarefa} />
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    flex: 1, // Faz com que a lista ocupe o espaço disponível
    marginStart: 14,
    marginEnd: 14,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
