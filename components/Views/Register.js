import React, { useState, } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'




const Register = () => {

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState(false)



    const navigation = useNavigation();
    //alamcena elcliente

    const registerComplete = async () => {
        //validar espacios vacios para mandar alarma 
        if (nombre == '' || apellidos == '' || telefono == '' || correo == '' || password == '') {
            setAlerta(true)
            return;
        }
        //generar el paciente 
        const paciente = { nombre, apellidos, telefono, correo, password }
        console.log(paciente)

        // guardando en la api falsa
      try {
        await axios.post( 'http://192.168.3.43:3000/pacientes', {paciente})
      } catch (error) {
        console.log(error)
      }

        navigation.navigate('login')
    }
    return (
        <ScrollView style={style.container} >
            <View>
                <View>
                    <Text style={style.titles}>Registrate</Text>
                    <View style={style.register}>

                        <View style={style.reg}>
                            <TextInput
                                style={style.inpts}
                                placeholder='Ej...Maria'
                                maxLength={15}
                                label='Nombre'
                                placeholderTextColor={'black'}
                                onChangeText={nombre => setNombre(nombre)}
                            />
                            <TextInput
                                style={style.inpts}
                                placeholder='Ej...Juarez'
                                maxLength={15}
                                label='Apellidos'
                                placeholderTextColor={'black'}
                                onChangeText={apellidos => setApellidos(apellidos)}
                            />
                            <TextInput
                                style={style.inpts}
                                placeholder='Ej...Maria@Gmail.com'
                                keyboardType='email-address'
                                placeholderTextColor={'black'}
                                label='Correo'
                                lineColor='red'
                                onChangeText={email => setCorreo(email)}
                            />
                            <TextInput
                                style={style.inpts}
                                placeholder='Ej...12365cxd'
                                maxLength={15}
                                label='Contraseña'
                                placeholderTextColor={'black'}
                                secureTextEntry={true}
                                onChangeText={password => setPassword(password)}
                            />

                            <TextInput
                                style={style.inpts}
                                placeholder='33135246656'
                                maxLength={10}
                                keyboardType='number-pad'
                                placeholderTextColor={'black'}
                                label='Telefono'
                                onChangeText={telefono => setTelefono(telefono)}
                            />

                        </View>
                        <Button style={style.btn} color='#ae6db499' mode="contained" onPress={() => registerComplete()}>
                            Registrarme
                        </Button>
                        <Portal>
                            <Dialog visible={alerta} onDismiss={() => setAlerta(false)} >
                                <Dialog.Title>
                                    Error
                                </Dialog.Title>
                                <Dialog.Content>
                                    <Paragraph>
                                        Todos Los Campos son Obligatorios
                                    </Paragraph>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={() => setAlerta(false)
                                    
                                    
                                    }>OK</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>

                    </View>


                </View>
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fae4df',

    },
    titles: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    register: {
        width: '95%',
        height: '85%',
        backgroundColor: '#ae6db499',
        marginHorizontal: 10,
        margintop: 10,
        borderRadius: 20

    },
    reg: {
        marginTop: 50,
        marginBottom: 50
    },
    inpts: {
        marginHorizontal: 40,
        marginBottom: 10,
        color: 'black',
        borderRadius: 3,
        height: 50
    },
    btn: {

        marginHorizontal: 50
    }

})

export default Register