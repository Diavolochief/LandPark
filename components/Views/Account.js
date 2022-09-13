import React from 'react'
import {View, ImageBackground, StyleSheet} from 'react-native'
import { Button,Card} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const Account = () => {
  const navigation = useNavigation();

  const registrar = () => {
    navigation.navigate('Register')
  }

  const logIn = () => {
    navigation.navigate('login')
  }

  const imgd = require('../assets/uwu.png')
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{ height: 200 }} source={imgd} style={styles.image}>





      </ImageBackground>
      <View>


        <Card style={styles.card}>
          <Card.Actions>
            <View style={styles.btns}>
              <Button mode='outlined' color='white' style={styles.btn} onPress={() => registrar()}>Sign In</Button>
              <Button mode='outlined' color='white' style={styles.btn} onPress={() => logIn()}>Log In</Button>
            </View> 
          </Card.Actions>
         
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
    

  }, txt: {
    alignItems: 'center',
    justifyContent: 'center'
    ,
  },
  image: {
    flex: 1,
  height:200,
  width:200,
  marginHorizontal:80,
  marginVertical:100
  
  

  },
  text: {
    color: "white",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  btns: {
    flexDirection: 'row',
    marginBottom: 50

  },
  btn: {
    textDecorationColor: 'white',
    top: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20
  },
  card: {
    marginHorizontal: 5,
    height: 190,
    marginTop: 60,
    backgroundColor: '#ae6db490',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Account