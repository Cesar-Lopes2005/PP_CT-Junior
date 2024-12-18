import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../../Components/Header';
import Tarefas from '../../Components/Tarefas';
import BoxNovaTarefa from '../../Components/BoxNovaTarefa';
import { useState } from 'react';

export default function Home({navigation}) {
  const [list, setList] = useState([
    {
      id: 1,
      label: 'Fazer exercícios de Cálculo',
      info: 'Terminar o dever de cálculo do livro página 7',
      concluida:false
    },
    {
      id: 2,
      label: 'Tirar amigo X',
      info: 'Criar o link e mandar no grupo',
      concluida:false
    },
    {
      id: 3,
      label: 'Terminar PP',
      info: 'Finalizar o código',
      concluida:false
    },
  ]);

  const salvarTarefa = (novaTarefa) => {
    setList((prevList) => {
      if (tarefaSelecionada) {
        // Atualiza a tarefa existente
        return prevList.map((tarefa) =>
          tarefa.id === tarefaSelecionada.id ? { ...tarefa, ...novaTarefa } : tarefa
        );
      }
      // Adiciona uma nova tarefa
      return [...prevList, { id: Date.now(), ...novaTarefa }];
    });
  
    setTarefaSelecionada(null); // Reseta a tarefa selecionada
  };
  

  const deletarTarefa = (id) => {
    setList((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };  
  
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const handleInfo = (tarefa) => {
    setTarefaSelecionada(tarefa);
  };

  const tarefasConcluidas = list.filter((tarefa) => tarefa.concluida).length;
  const tarefasNaoConcluidas = list.length - tarefasConcluidas;

  const alternarTarefa = (id) => {
    setList((prevList) => 
      prevList.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header name="cesar_lopes" navigation={navigation}/>

      <Text style={styles.titulo}>Tarefas</Text>
      <View style={styles.contadores}>
        <Text style={styles.contadorText}>
          Tarefas Concluídas: {tarefasConcluidas}
        </Text>
        <Text style={styles.contadorText}>
          Tarefas Pendentes: {tarefasNaoConcluidas}
        </Text>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Tarefas data={item} onDelete = {deletarTarefa} onInfo={handleInfo} onAlternar={alternarTarefa} />}
        ListFooterComponent={() => (
          <View style={styles.boxContainer}>
            <BoxNovaTarefa
              onSalvarTarefa={salvarTarefa}
              tarefaInicial={tarefaSelecionada}
            />
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
    flex: 1, 
    marginStart: 14,
    marginEnd: 14,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  contadores: {
    marginBottom: 20,
    alignItems: 'center',
  },
  contadorText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
