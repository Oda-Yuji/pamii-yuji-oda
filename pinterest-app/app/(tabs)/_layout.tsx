import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000ff',
        headerStyle: {
          backgroundColor: '#fff',
          height: 10,
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
    }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Página inicial',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen 
        name="search" 
        options={{ 
          title: 'Pesquisar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }} 
      />
      <Tabs.Screen 
        name="box" 
        options={{ 
          title: 'Caixa de...',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }} 
      />
    </Tabs>
  );
}
