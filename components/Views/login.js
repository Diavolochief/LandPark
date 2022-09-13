import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, ImageBackground, StyleSheet, Text, ScrollView, TouchableOpacity, } from 'react-native'
import { Avatar, Button, Card } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const ingresar = () => {
    navigation.navigate('Muestra')
  }
  const imgd = require('../assets/sexual.png')
  return (
    <View style={styles.container}>
      <ImageBackground 
      imageStyle={{ height: 400 }} source={imgd} style={styles.image}></ImageBackground>
      <View>
        <Card style={styles.card}>
          <Card.Actions style={styles.centr}>
            <TextInput
              style={styles.inputNombre}
              onChangeText={setUsuario}
              placeholder="E-mail"
              keyboardType='email-address'
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="password"
              keyboardType="visible-password"
            /></Card.Actions>
          <Button
            style={styles.btn}
            mode='contained'
            color='#fae4df'
            onPress={() => ingresar()}
          ><Text>Ingresar</Text></Button>
        </Card>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: '#fae4df'
  },
  txt: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    marginHorizontal: 80,
    marginTop: 20
  },
  image: {
    flex: 1,
    top: 10,
    height: 20,
  },
  centr: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30
  },
  inputNombre: {
    height: 40,
    backgroundColor: '#ffff',
    width: 150,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
  input: {
    backgroundColor: '#ffff',
    height: 40,
    width: 150,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
  card: {
    marginHorizontal: 5,
    height: 190,
    marginTop: 60,
    backgroundColor:'#ae6db490',
    justifyContent:'center'

  },

});

export default Login