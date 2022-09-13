import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { DefaultTheme, Provider as PapaerProvider } from 'react-native-paper'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './components/Views/Account';
import Register from './components/Views/Register';
import Login from './components/Views/login';
import Formulario from './components/Views/Formulario';
import Muestra from './components/muestra/Muestra';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <PapaerProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Account"
            screenOptions={
              {
                headerShown: false,
                headerBackground: '#BEE4DE'
              }
            }>
            <Stack.Screen
              name='Account'
              component={Account} />
            <Stack.Screen
              name='login'
              component={Login} />
            <Stack.Screen
              name='Register'
              component={Register} />
            <Stack.Screen
              name='Formulario'
              component={Formulario} />
            <Stack.Screen
              name='Muestra'
              component={Muestra} />
          </Stack.Navigator>
        </NavigationContainer>
      </PapaerProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
