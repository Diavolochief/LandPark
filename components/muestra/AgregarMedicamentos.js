import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper'
import axios from 'axios';


const AgregarMedicamento = () => {
  const [med, setMed] = useState('')
  const [dosis, setDosis] = useState('')
  const [stock, setStock] = useState('')
  const [tipo, setTipo] = useState('')
  const [alarma, setAlarma] = useState('')
  const [alerta, setAlerta] = useState(false)


  const limpiarFormulario = () => {
    Alert.alert(
      "hey!!",
      "Medicamento Agregado",
      [

        {
          text: "OK", onPress: () => {
            setMed('')
            setDosis('')
            setTipo('')
            setAlarma('')
            setStock('')

          }
        }
      ]
    );
  }


  const saveMed = async () => {
    //creamos objeto medicinas para guardar en la api
    const medicinas = { med, stock, dosis, tipo, alarma }
    console.log(medicinas)

    if (med == '' || dosis == '' || tipo == '' || stock == '' || alarma == '') {
      setAlerta(true)
      return;
    }
    try {
      await axios.post('http://192.168.3.43:3000/Medicamentos', medicinas)

    } catch (error) {
      console.log(error)
    }

    limpiarFormulario()

  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titles}>Agregar Medicamento</Text>
      <View style={styles.register}>
        <View style={styles.reg}>
          <View style={styles.iptn}>
            <View>

              <TextInput
                style={styles.in}
                backgroundColor='white'
                borderRadius={6}
                value={med}
                placeholder='Paracetamol.. ej'
                maxLength={20}
                label='Medicamento'
                onChangeText={medi => setMed(medi)}
                />
              <TextInput
                value={dosis}
                style={styles.in}
                borderRadius={6}
                backgroundColor='white'
                placeholder='Dosis ej. 1 pastilla...'
                keyboardType='number-pad'
                maxLength={9}
                label='Dosis recetada'
                onChangeText={dosis => setDosis(dosis)} />
              <TextInput
                value={stock}
                style={styles.in}
                backgroundColor='white'
                borderRadius={6}
                placeholder='cuantas pastillas hay?...'
                keyboardType='number-pad'
                maxLength={2}
                label='Stock de medicamento'
                onChangeText={stock => setStock(stock)} 
                />
              <View style={[styles.picker, styles.in]}>
                <Picker
                  onValueChange={(itemValue) => setTipo(itemValue)}
                  selectedValue={tipo}
                >
                  <Picker.Item label="---Seleccione el Tipo---" />
                  <Picker.Item label="Inyectable" value='inyectable' />
                  <Picker.Item label="Tableta" value='tableta' />
                  <Picker.Item label="Grajea" value='grajea' />
                  <Picker.Item label="Untable" value='untable' />
                  <Picker.Item label="Gotero" value='gotero' />
                  <Picker.Item label="Otros" value='otro  ' />
                </Picker>
              </View>
              <View style={[styles.picker, styles.in]}>
                <Picker
                  onValueChange={(alrm) => setAlarma(alrm)}
                  selectedValue={alarma}>

                  <Picker.Item label="Cada cuanto"/>
                  <Picker.Item label="4hrs" value='4 hrs'/>
                  <Picker.Item label="6hrs" value='6 hrs'/>
                  <Picker.Item label="8hrs" value='8 hrs'/>
                  <Picker.Item label="12hrs" value='12 hrs'/>
                  <Picker.Item label="24hrs" value='24 hrs'/>
                </Picker>
              </View>

            </View>
            <Button
              onPress={() => saveMed()}>
              <Text>Cargar</Text></Button>
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
                  <Button onPress={() => setAlerta(false)}>OK</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>

        </View>

      </View>


    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: '#fae4df'
  },
  register: {
    width: '95%',
    height: '95%',
    flex: 1,
    backgroundColor: '#ae6db499',
    marginHorizontal: 10,
    margintop: 10,
    borderRadius: 20
  },
  reg: {
    marginTop: 50,
    marginBottom: 30
  },
  iptn: {
    marginHorizontal: 20
  },
  in: {
    marginHorizontal: 20,
    marginBottom: 10,
    color: 'black',
    borderRadius: 6,
    height: 50
  },
  picker: {
    backgroundColor: 'white',
  },
  titles: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 25,
    fontWeight: '600',
    fontSize: 25
  }

})
export default AgregarMedicamento;  
