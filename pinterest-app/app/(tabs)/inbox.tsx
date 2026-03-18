import Entypo from '@expo/vector-icons/Entypo';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const chats = [
  { id: '1', name: 'Ana', ultimaMensagem: 'Oi! Tudo bem?' },
  { id: '2', name: 'Carlos', ultimaMensagem: 'Gostei da ideia!' },
  { id: '3', name: 'Ricardo', ultimaMensagem: 'O Leandrinho é um merda' },
  { id: '4', name: 'Leandrinho', ultimaMensagem: 'O Ricardo é legal' },
  { id: '5', name: 'Rodney', ultimaMensagem: 'Rodney' },
  { id: '6', name: 'Ariana Grande', ultimaMensagem: 'Sou zépekena' },
  { id: '7', name: 'Taylor Shift', ultimaMensagem: 'Show gratuito pra vc' },
  { id: '7', name: 'Dedé do Vasco', ultimaMensagem: 'Sou do Vasco!' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Atualizações</Text>
        <Text style={styles.textoCabecalho}>Caixa de Entrada</Text>
      </View>
      <View style={styles.novaMensagem}>
        <Entypo name="new-message" size={24} color="black" style={styles.iconNovaMensagem}/>
        <Text style={styles.textoNovaMensagem}>Nova Mensagem</Text>
      </View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>{item.ultimaMensagem}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  textoCabecalho: {
    fontWeight: '500',
  },
  novaMensagem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoNovaMensagem: {
    fontWeight: 'bold',
  },
  iconNovaMensagem: {
    color: '#FFF',
    padding: 8,
    backgroundColor: '#E00',
    borderRadius: 12,
  },
  chatItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
  },
});