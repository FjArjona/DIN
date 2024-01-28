import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CalculateIMG} from './components/calculateIMG/CalculateIMG';
class App extends Component {



  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.titulo}>
          <Text style={estilos.tituloText}>Calculadora IMC</Text>
        </View>
        <View>

        <CalculateIMG/>

        </View>
        <View>
          <Text style={estilos.footer}>Created for 2n DAM</Text>
        </View>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#6a1b9a',
    paddingTop: 30,
  },
  titulo: {
    alignItems: 'center',
  },
  tituloText: {
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 32,
  },

  footer: {
    //flex:1,
    color: 'grey',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: '100%',
  },
});
export default App;
