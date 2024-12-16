import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from '../../Components/Header' 
import Tarefas from '../../Components/Tarefas';

const list = [
  {
    id: 1,
    label: 'Fazer exercícios de Cálculo',
    date: '16/12/2024',
    info:'Terminar o dever de cálculo do livro página 7',
    type: 0 //Faculdade
  },
  {
    id: 2,
    label: 'Tirar amigo X',
    date: '17/12/2024',
    info:'Criar o link e mandar no grupo',
    type: 1 //Pessoal
  },
  {
    id: 3,
    label: 'Terminar PP',
    date: '18/12/2024',
    info:'Finalizar o código',
    type: 2 //CT
  },
]

export default function App(){
  return (
    <View style={styles.container}>
      
      <Header name="cesar_lopes"/>
      
      <Text style={styles.titulo}>Tarefas</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => <Tarefas data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  titulo:{
    fontSize:36,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    marginBottom:10
  },
  list: {
    marginStart:14,
    marginEnd:14
  }
});