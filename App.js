import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreean'; 
import InicialScreen from './components/telaInicial';
import TelaProduto from './components/TelaProduto';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inicial" component={InicialScreen} />
        <Stack.Screen name="Produto" component={TelaProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
