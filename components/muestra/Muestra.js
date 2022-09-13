import React from 'react'
import { View,StyleSheet,ImageBackground} from 'react-native'
import{BottomNavigation,Text} from 'react-native-paper'
import Formulario from '../Views/Formulario'
import ListaMedi from './ListaMeds'
import AgregarMedicamento from './AgregarMedicamentos'
const imgd = require('../assets/uwu.png')
const MusicRoute = () =><View></View>




const Inicio = () => <ListaMedi/>
const AddMeds = () =>  <AgregarMedicamento/>
const RecentsRoute = () => <Formulario/>;


const Muestra = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inicio', title: 'Inicio', icon: 'home'},
    { key: 'AddMed', title: 'Nueva Medicina', icon:'plus-circle' },
    { key: 'Stats', title: 'Reporte', icon:'newspaper'},
    { key: 'Cuenta', title: 'Cuenta', icon:'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    AddMed: AddMeds,
    Stats: RecentsRoute,
    // Cuenta:Accounts
  });
  return (
    <BottomNavigation
    barStyle={{ backgroundColor: '#ae6db499' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}
const style=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae4df',
},
reg: {
  marginTop: 50,
  marginBottom: 50
},
})

export default Muestra