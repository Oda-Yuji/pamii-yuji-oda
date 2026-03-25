import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router'

const chats = [
  { id: '1', name: 'Ana', ultimaMensagem: 'Oi! Tudo bem?' },
  { id: '2', name: 'Carlos', ultimaMensagem: 'Gostei da ideia!' },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>{item.ultimaMensagem}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  chatItem: { padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontWeight: 'bold', fontSize: 16 },
  message: { color: '#666' },
});