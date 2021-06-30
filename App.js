/* Recursos */
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Ícones
import { AntDesign } from '@expo/vector-icons';

/* Componentes */
import Homescreen from './src/screens/Homescreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabTabIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search1';
            } else if (route.name === 'Notifications') {
              iconName = 'bells';
            } else if (route.name === 'Messages') {
              iconName = 'mail';
            }

            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgba(0, 0, 0, 1)',
          inactiveTintColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Search" component={SettingsScreen} />
        <Tab.Screen name="Notifications" component={SettingsScreen} />
        <Tab.Screen name="Messages" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
